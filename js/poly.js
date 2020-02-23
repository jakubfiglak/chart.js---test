const coeffs = document.querySelectorAll('.number');
const polyForm = document.querySelector('#poly');
const drawBtn = document.querySelector('#draw');

function generateData(e) {
  e.preventDefault();
  console.log(e);
}

polyForm.addEventListener('submit', generateData);
