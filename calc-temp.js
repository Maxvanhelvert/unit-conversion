let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");
let inputUnit = document.getElementById("inputSelect");
let outputUnit = document.getElementById("outputSelect");
let calcButton = document.getElementById("calculate");

function calculate() {
  let input = inputBox.value;
  let inUnit = inputUnit.value;
  let outUnit = outputUnit.value;
  let celsius = getCelsius(input, inUnit);
  let output = getOutput(celsius, outUnit);
  return output;
}

function getCelsius(input, unit) {
  switch (unit) {
    case "Celsius":
      return input;
    case "Fahrenheit":
      return (input - 32) / 1.8;
    case "Kelvin":
      return input - 273.15;
  }
}

function getOutput(input, unit) {
  switch (unit) {
    case "Celsius":
      return input;
    case "Fahrenheit":
      return input * 1.8 + 32;
    case "Kelvin":
      return parseFloat(input) + 273.15;
  }
}

function round(num) {
  return Math.round(num * 100) / 100;
}

inputBox.addEventListener("keyup", () => {
  output = calculate();
  out = round(output);
  outputBox.value = out;
});

calcButton.addEventListener("click", () => {
  output = calculate();
  out = round(output);
  outputBox.value = out;
});
