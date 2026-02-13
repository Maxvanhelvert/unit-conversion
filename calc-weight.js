let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");
let inputUnit = document.getElementById("inputSelect");
let outputUnit = document.getElementById("outputSelect");
let calcButton = document.getElementById("calculate");

function calculate() {
  let input = inputBox.value;
  let inUnit = inputUnit.value;
  let outUnit = outputUnit.value;
  let gram = getGram(input, inUnit);
  let output = getOutput(gram, outUnit);
  return output;
}

function getGram(input, unit) {
  switch (unit) {
    case "Gram":
      return input;
    case "Kilogram":
      return input * 1000;
    case "Milligram":
      return input / 1000;
    case "Pounds":
      return input * 453.59237;
    case "Ounces":
      return input * 28.3495231;
  }
}

function getOutput(input, unit) {
  switch (unit) {
    case "Gram":
      return input;
    case "Kilogram":
      return input / 1000;
    case "Milligram":
      return input * 1000;
    case "Pounds":
      return input / 453.59237;
    case "Ounces":
      return input / 28.3495231;
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
