import chartInit from './chartInit';
import calcPolynominal from './calcPolynominal';
import { generateLabel, generateArguments } from './chartHelpers';

const coeffInputs = document.querySelectorAll('.number');
const polyForm = document.querySelector('#poly');
const colorInput = document.querySelector('#color');
const minInput = document.querySelector('#min');
const maxInput = document.querySelector('#max');

const myChart = chartInit();

function drawChart(e) {
  e.preventDefault();

  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);
  const newArgs = generateArguments(min, max);

  const coeffs = Array.from(coeffInputs).map(input => parseFloat(input.value));

  const newValues = calcPolynominal(newArgs, coeffs);

  const newLabel = generateLabel(coeffs);

  myChart.data.labels = newArgs;

  myChart.data.datasets[0] = {
    data: newValues,
    label: newLabel,
    borderColor: `${colorInput.value}`,
  };

  myChart.update({
    duration: 800,
    easing: 'easeOutBounce',
  });
}

polyForm.addEventListener('submit', drawChart);
