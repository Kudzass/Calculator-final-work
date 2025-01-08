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
}
