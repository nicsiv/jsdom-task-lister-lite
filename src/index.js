

let form = document.querySelector("form")
form.addEventListener("submit", submitTask)

function submitTask(event) {
  event.preventDefault();
  let userInput = event.target[0].value;
  let toDoUl = document.querySelector("#tasks");
  let newLi = document.createElement("li");
  newLi.innerText = userInput;
  toDoUl.append(newLi);
  event.target[0].value = "";
}
