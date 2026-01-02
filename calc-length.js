let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");
let inputUnit = document.getElementById("inputSelect");
let outputUnit = document.getElementById("outputSelect");
let calcButton = document.getElementById("calculate");

function calculate() {
  let input = inputBox.value;
  let inUnit = inputUnit.value;
  let outUnit = outputUnit.value;
  let meter = getMeters(input, inUnit);
  let output = getOutput(meter, outUnit);
  return output;
}

function getMeters(input, unit) {
  switch (unit) {
    case "Meter":
      return input;
    case "Centimeter":
      return input / 100;
    case "Millimeter":
      return input / 1000;
    case "Kilometer":
      return input * 1000;
    case "Miles":
      return input * 1609.344;
    case "Yards":
      return input * 0.9144;
    case "Feet":
      return input * 0.3048;
    case "Inches":
      return input * 0.0254;
  }
}

function getOutput(input, unit) {
  switch (unit) {
    case "Meter":
      return input;
    case "Centimeter":
      return input * 100;
    case "Millimeter":
      return input * 1000;
    case "Kilometer":
      return input / 1000;
    case "Miles":
      return input / 1609.344;
    case "Yards":
      return input / 0.9144;
    case "Feet":
      return input / 0.3048;
    case "Inches":
      return input / 0.0254;
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
