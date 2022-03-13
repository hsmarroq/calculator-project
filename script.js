'use strict';

// Display
let prevOperant = document.querySelector('.prev-operand');
let currentOperant = document.querySelector('.current-operand');
let currentOperantText = document.querySelector('.current-operand').textContent;
let deleteBtn = document.querySelector('.delete-btn');

// Clear Button Clicker
const clear = () => {
  prevOperant.textContent = '';
  currentOperant.textContent = '';
};

document.querySelector('.clear-btn').addEventListener('click', () => {
  clear();
});

// Delete Button
const deleteNum = () => {
  currentOperantText.toString().slice(0, -1);
};

document.querySelector('.delete-btn').addEventListener('click', () => {
  currentOperant.textContent = currentOperant.textContent
    .toString()
    .slice(0, -1);
});

// Logic Buttons
let logicBtns = document.querySelectorAll('.logic-btn');

logicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentOperant.textContent += btn.textContent;
  });
});

let logicExits = document.querySelectorAll('.logic-exit');

const exitName = logicExits.forEach(newBtn => {
  newBtn.addEventListener('click', () => {
    currentOperant.textContent += newBtn.textContent;
    prevOperant.textContent = currentOperant.textContent;
    currentOperant.textContent = '';
  });
});

// deleteBtn;
