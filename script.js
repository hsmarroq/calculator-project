'use strict';
// Globla Variable //
let logicExitLogged = '';
let finalResult;
let clicked = false;

// Display //
let prevOperant = document.querySelector('.prev-operand');
let currentOperant = document.querySelector('.current-operand');
let currentOperantText = document.querySelector('.current-operand').textContent;
let deleteBtn = document.querySelector('.delete-btn');

// Clear Button Clicker //
const clear = () => {
  prevOperant.textContent = '';
  currentOperant.textContent = '';
  logicExitLogged = '';
  clicked = false;
  finalResult = undefined;
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
    currentOperant.textContent += btn.textContent;
  });
});

// Exit Buttons like addition, division, etc //
let logicExits = document.querySelectorAll('.logic-exit');

const exitName = logicExits.forEach(newBtn => {
  newBtn.addEventListener('click', () => {
    if (clicked == false) {
      prevOperant.textContent = currentOperant.textContent;
      currentOperant.textContent = '';
      logicExitLogged += newBtn.textContent;
      console.log(logicExitLogged);
      clicked = true;
    }
  });
});

// Switch Operator for addition, division, etc //
// This will be implemented when the equal button is clicked //
const logicSwitch = () => {
  switch (logicExitLogged) {
    case '+':
      finalResult =
        parseInt(currentOperant.textContent) +
        parseInt(prevOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = parseInt(finalResult);
      break;
    case '/':
      finalResult =
        parseInt(prevOperant.textContent) /
        parseInt(currentOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = parseInt(finalResult);
      break;
    case '*':
      finalResult =
        parseInt(prevOperant.textContent) *
        parseInt(currentOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = parseInt(finalResult);
      break;
    case '-':
      finalResult =
        parseInt(prevOperant.textContent) -
        parseInt(currentOperant.textContent);
      prevOperant.textContent = '';
      currentOperant.innerHTML = parseInt(finalResult);
      break;
  }
};

const ifResultDefined = () => {
  switch (logicExitLogged) {
    case '+':
      let addedUp =
        parseInt(currentOperant.textContent) +
        parseInt(prevOperant.textContent);
      finalResult += addedUp;
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    case '/':
      let divided =
        parseInt(currentOperant.textContent) /
        parseInt(prevOperant.textContent);
      finalResult += addedUp;
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    case '*':
      let multiplied =
        parseInt(currentOperant.textContent) *
        parseInt(prevOperant.textContent);
      finalResult += addedUp;
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    case '-':
      let subtracted =
        parseInt(currentOperant.textContent) -
        parseInt(prevOperant.textContent);
      finalResult += addedUp;
      prevOperant.textContent = '';
      currentOperant.innerHTML = finalResult;
      break;
    default:
      currentOperant.innerHTML = finalResult;
  }
};

document.querySelector('.logic-equal').addEventListener('click', () => {
  if (currentOperant.innerHTML !== '' && prevOperant.innerHTML !== '') {
    if (finalResult == undefined) {
      logicSwitch();
      logicExitLogged = '';
    } else if (finalResult == Number) {
      ifResultDefined();
      logicExitLogged = '';
    }
  }
});
