import Chart from 'chart.js';

const canvas = document.querySelector('#myChart');
const ctx = canvas.getContext('2d');

Chart.defaults.global.elements.line.fill = false;

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: 'x^2',
      data: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
      borderColor: '#f27a54',
    },
  ],
};

const options = {
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
