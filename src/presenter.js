import romanos from "./romanos.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#romano-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  if (isNaN(firstNumber) || firstNumber < 1 || firstNumber > 1000) {
    div.innerHTML = "<p style='color:red;'>Número fuera de rango (1-1000)</p>";
    return;
  }

  div.innerHTML = "<p>Romano: " + romanos(firstNumber) + "</p>";
});
