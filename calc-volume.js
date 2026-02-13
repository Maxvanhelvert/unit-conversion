let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");
let inputUnit = document.getElementById("inputSelect");
let outputUnit = document.getElementById("outputSelect");
let calcButton = document.getElementById("calculate");

function calculate() {
  let input = inputBox.value;
  let inUnit = inputUnit.value;
  let outUnit = outputUnit.value;
  let liter = getLiter(input, inUnit);
  let output = getOutput(liter, outUnit);
  return output;
}

function getLiter(input, unit) {
  switch (unit) {
    case "Liter":
      return input;
    case "Milliliter":
      return input / 1000;
    case "Cups":
      return input / 4;
    case "Tablespoon":
      return input * 0.01478676;
    case "Teaspoon":
      return input * 0.004929;
  }
}

function getOutput(input, unit) {
  switch (unit) {
    case "Liter":
      return input;
    case "Milliliter":
      return input * 1000;
    case "Cups":
      return input * 4;
    case "Tablespoon":
      return input / 0.01478676;
    case "Teaspoon":
      return input / 0.004929;
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
