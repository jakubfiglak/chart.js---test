import Chart from 'chart.js';

const canvas = document.querySelector('#myChart');
const ctx = canvas.getContext('2d');

Chart.defaults.global.elements.line.fill = false;

const args = Array.from({ length: 11 }, (v, k) => k - 5);
console.log(args);
const values = args.map(arg => arg ** 2);
console.log(values);
const label = 'test';

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
