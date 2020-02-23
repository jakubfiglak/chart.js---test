import Chart from 'chart.js';

const canvas = document.querySelector('#myChart');
const ctx = canvas.getContext('2d');

Chart.defaults.global.elements.line.fill = false;

const args = Array.from({ length: 11 }, (v, k) => k - 5);
const values = [];
const label = '';

const data = {
  labels: args,
  datasets: [
    {
      label,
      data: values,
      borderColor: '#f27a54',
    },
  ],
};

const options = {
  tooltips: {
    mode: 'x',
  },
  scales: {
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const myChart = new Chart(ctx, {
  type: 'line',
  data,
  options,
});

const coeffInputs = document.querySelectorAll('.number');
const polyForm = document.querySelector('#poly');
const colorInput = document.querySelector('#color');
const minInput = document.querySelector('#min');
const maxInput = document.querySelector('#max');

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
      return 'x';
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
