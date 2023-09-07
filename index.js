// Import stylesheets
import './style.css';

// Write Javascript code!
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const input = document.querySelector('.input');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (btn) {
    if (btn.target.id === 'gray') {
      body.style.backgroundColor = btn.target.id;
      input.innerHTML = btn.target.id;
    }
    if (btn.target.id === 'white') {
      body.style.backgroundColor = btn.target.id;
      input.innerHTML = btn.target.id;
    }
    if (btn.target.id === 'yellow') {
      body.style.backgroundColor = btn.target.id;
      input.innerHTML = btn.target.id;
    }
    if (btn.target.id === 'blue') {
      body.style.backgroundColor = btn.target.id;
      input.I = btn.target.id;
    }
  });
});
