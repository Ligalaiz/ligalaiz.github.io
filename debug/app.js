document.addEventListener("DOMContentLoaded", () => {
  let num1 = document.querySelector("#num1");
  let num2 = document.querySelector("#num2");
  let addBtn = document.querySelector("#add");
  let subBtn = document.querySelector("#sub");
  let output = document.querySelector("#output");

  function getInputValues() {
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);

    return [value1, value2];
  }

  function addHandler() {
    let values = getInputValues();
    let result = values[0] + values[1];
    displayResult(result);
  }

  function subHandler() {
    let values = getInputValues();
    let result = values[0] - values[1];
    displayResult(result);
  }

  function displayResult(result) {
    output.closest(".card").style.display = "block";
    output.innerHTML = `Result = ${result}`;
    console.trace();
  }

  addBtn.addEventListener("click", addHandler);
  subBtn.addEventListener("click", subHandler);
});
