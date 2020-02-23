import Chart from 'chart.js';

const canvas = document.querySelector('#myChart');
const ctx = canvas.getContext('2d');

Chart.defaults.global.elements.line.fill = false;

const args = Array.from({ length: 11 }, (v, k) => k - 5);
const values = args.map(arg => arg ** 2);
const label = 'x^2';

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

function calculatePolynominal(argums, coeffs) {
  return argums.map(
    arg =>
      coeffs
        .map((coeff, idx) => coeff * arg ** (coeffs.length - idx - 1))
        .reduce((prev, curr) => prev + curr),
    0
  );
}

function drawChart(e) {
  e.preventDefault();

  const coeffs = Array.from(coeffInputs).map(input => parseInt(input.value));

  const newValues = calculatePolynominal(args, coeffs);

  myChart.data.datasets[0].data = newValues;
  myChart.update({
    duration: 800,
    easing: 'easeOutBounce',
  });
}

polyForm.addEventListener('submit', drawChart);
