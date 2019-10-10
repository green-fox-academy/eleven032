'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});
