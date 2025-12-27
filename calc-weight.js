let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");
let inputUnit = document.getElementById("inputSelect");
let outputUnit = document.getElementById("outputSelect");

function calculate() {
  let input = inputBox.value;
  let inUnit = inputUnit.value;
  let outUnit = outputUnit.value;
  let gram = getGram(input, inUnit);
  let output = getOutput(gram, outUnit);
  outputBox.value = output;
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

inputBox.addEventListener("keyup", () => {
  calculate();
});
