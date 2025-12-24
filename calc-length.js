let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");

inputBox.addEventListener("keyup", () => {
  calculate();
});

function calculate() {
  let input = inputBox.innerHTML;
  print(input);
  outputBox.innerHTML = input;
}
