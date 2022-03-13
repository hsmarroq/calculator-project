'use strict';
// Globla Variable //
let logicExitLogged = '';
let finalResult;
let clicked = false;
let decimalClicked = false;
let BtnsFinalClicked = false;

// Display //
let prevOperant = document.querySelector('.prev-operand');
let currentOperant = document.querySelector('.current-operand');
let currentOperantText = document.querySelector('.current-operand').textContent;
let deleteBtn = document.querySelector('.delete-btn');

// Clear Function & Button Clicker //
const clear = () => {
  prevOperant.textContent = '';
  currentOperant.textContent = '0';
  logicExitLogged = '';
  clicked = false;
  finalResult = undefined;
  decimalClicked = false;
  BtnsFinalClicked = false;
};

document.querySelector('.clear-btn').addEventListener('click', () => {
  clear();
});

// Delete Button //
document.querySelector('.delete-btn').addEventListener('click', () => {
  currentOperant.textContent = currentOperant.textContent
    .toString()
    .slice(0, -1);
});

// Logic Buttons Like Numbers //
let logicBtns = document.querySelectorAll('.logic-btn');

logicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (BtnsFinalClicked == false) {
      if (currentOperant.innerHTML == '0') {
        currentOperant.innerHTML = '';
      }
      currentOperant.textContent += btn.textContent;
    }
  });
});

// Exit Buttons like addition, division, etc //
let logicExits = document.querySelectorAll('.logic-exit');

const exitName = logicExits.forEach(newBtn => {
  newBtn.addEventListener('click', () => {
    if (clicked == false && finalResult == undefined) {
      prevOperant.textContent = currentOperant.textContent;
      currentOperant.textContent = '';
      logicExitLogged += newBtn.textContent;
      clicked = true;
    }

    if (finalResult !== undefined) {
      clicked = true;
      BtnsFinalClicked = false;
      prevOperant.innerHTML = currentOperant.innerHTML;
      currentOperant.innerHTML = '';
    }
  });
});

// Decimal Clicked //
document.querySelector('.logic-decimal').addEventListener('click', () => {
  if (decimalClicked == false) {
    decimalClicked = true;
    currentOperant.innerHTML +=
      document.querySelector('.logic-decimal').textContent;
  }
});

// Switch Operator for addition, division, etc //
// This will be implemented when the equal button is clicked //
const logicSwitch = () => {
  switch (logicExitLogged) {
    case '+':
      finalResult =
        parseFloat(currentOperant.textContent) +
        parseFloat(prevOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    case '/':
      finalResult =
        parseFloat(prevOperant.textContent) /
        parseFloat(currentOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    case '*':
      finalResult =
        parseFloat(prevOperant.textContent) *
        parseFloat(currentOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    case '-':
      finalResult =
        parseFloat(prevOperant.textContent) -
        parseFloat(currentOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
  }
};

document.querySelector('.logic-equal').addEventListener('click', () => {
  if (currentOperant.innerHTML !== '' && prevOperant.innerHTML !== '') {
    logicSwitch();
    logicExitLogged = '';
    BtnsFinalClicked = true;
    clicked = false;
  }
});
