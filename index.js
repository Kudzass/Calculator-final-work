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
