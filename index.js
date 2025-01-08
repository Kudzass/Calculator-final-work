let currentNumber = "0";
let previousNumber = null;
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

function updateDisplay() {
  if (currentNumber === null) {
    display.innerHTML = "0";
  } else {
    display.innerHTML = currentNumber;
  }
}
function calculate(num1, num2, operator) {
  let result = 0;
  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "x") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "÷") {
    if (parseFloat(num2) === 0) {
      return "Error";
    }
    result = parseFloat(num1) / parseFloat(num2);
  }
  return result + "";
}

function handleButtonClick(event) {
  const buttonText = event.target.innerText;
  if (buttonText === "AC") {
    currentNumber = "0";
    previousNumber = null;
    operator = null;
    shouldResetDisplay = false;
  } else if (buttonText === "DEL") {
    if (currentNumber.length > 1) {
      currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    } else {
      currentNumber = "0";
    }
  } else if (buttonText === "=") {
    if (previousNumber !== null && operator !== null) {
      currentNumber = calculate(previousNumber, currentNumber, operator);
      previousNumber = null;
      operator = null;
      shouldResetDisplay = true;
    }
  } else if (
    buttonText === "+" ||
    buttonText === "-" ||
    buttonText === "x" ||
    buttonText === "÷"
  ) {
    if (previousNumber === null) {
      previousNumber = parseFloat(currentNumber);
    } else if (operator && !shouldResetDisplay) {
      previousNumber = calculate(previousNumber, currentNumber, operator);
    }
    operator = buttonText;
    shouldResetDisplay = true;
  } else {
    if (shouldResetDisplay) {
      currentNumber = buttonText;
      shouldResetDisplay = false;
    } else {
      if (currentNumber === "0" && buttonText !== ".") {
        currentNumber = buttonText;
        currentNumber = currentNumber + buttonText;
      }
    }
  }
  updateDisplay();
}
