'use strict';

// Display
let prevOperant = document.querySelector('.prev-operand');
let currentOperant = document.querySelector('.current-operand');

const clear = () => {
  prevOperant.textContent = '';
  currentOperant.textContent = '';
};

const deleteNum = () => {
  currentOperant.textContent.toString().slice(0, -1);
};

document.querySelector('.delete-btn').addEventListener('click', () => {
  deleteNum();
});

document.querySelector('.clear-btn').addEventListener('click', () => {
  clear();
});

// Logic Buttons
let logicBtns = document.querySelectorAll('.logic-btn');

logicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentOperant.textContent += btn.textContent;
  });
});

let logicExits = document.querySelectorAll('.logic-exit');

logicExits.forEach(newBtn => {
  newBtn.addEventListener('click', () => {
    currentOperant.textContent += newBtn.textContent;
    prevOperant.textContent = currentOperant.textContent;
    currentOperant.textContent = '';
  });
});
