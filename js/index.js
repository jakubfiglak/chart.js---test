import chartInit from './chartInit';

const coeffInputs = document.querySelectorAll('.number');
const polyForm = document.querySelector('#poly');
const colorInput = document.querySelector('#color');
const minInput = document.querySelector('#min');
const maxInput = document.querySelector('#max');

const myChart = chartInit();

function calculatePolynominal(argums, coeffs) {
  return argums.map(
    arg =>
      coeffs
        .map((coeff, idx) => coeff * arg ** (coeffs.length - idx - 1))
        .reduce((prev, curr) => prev + curr),
    0
  );
}

function generateLabel(coeffs) {
  const coeffsX = coeffs.map((coeff, idx) => {
    if (coeffs.length - idx - 1 === 0) {
      return `${coeff}`;
    }
    if (coeffs.length - idx - 1 === 1) {
      return `${coeff}x`;
    }
    return `${coeff}*x^${coeffs.length - idx - 1}`;
  });
  return `f(x) = ${coeffsX.join(' + ')}`;
}

function generateArguments(min, max) {
  return Array.from({ length: max - min + 1 }, (v, k) => k + min);
}

function drawChart(e) {
  e.preventDefault();

  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);
  const newArgs = generateArguments(min, max);

  const coeffs = Array.from(coeffInputs).map(input => parseFloat(input.value));

  const newValues = calculatePolynominal(newArgs, coeffs);

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
