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
  outputBox.value = Math.round(output);
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
      return input + 273.15;
  }
}

inputBox.addEventListener("keyup", () => {
  calculate();
});

calcButton.addEventListener("click", () => {
  calculate();
});
