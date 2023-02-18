let result = document.getElementById("result");
let calculation = "";

function addNumber(number) {
  calculation += number;
  result.value = calculation;
}

function calculate(operator) {
  if (operator === "=") {
    result.value = eval(calculation); //eval(calculation);
    calculation = "";
  } else {
    calculation += operator;
  }
}

function swapPositiveNegative() {
  result.value = result.value * -1;
  calculation = calculation * -1;
}

function clearResult() {
  calculation = "";
  result.value = "";
}

function backspace() {
  calculation = calculation.slice(0, -1);
  result.value = calculation;
}

function procent() {
  calculation = calculation / 100;
}
