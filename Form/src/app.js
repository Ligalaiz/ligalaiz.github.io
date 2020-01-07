import "./styles.css";
import { isValid } from "./utils";

const form = document.getElementById("form");
const input = form.querySelector("#question-input");
const submitBtn = form.querySelector("#submit");

form.addEventListener("submit", submitFormHandler);
input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value);
});

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    };

    submitBtn.disabled = true;
    console.log("Question", question);

    input.value = "";
    input.className = "";
    submitBtn.disabled = false;
  }
}
