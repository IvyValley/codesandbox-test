import "./styles.css";

const getTodoText = (target) => target.firstChild.innerText;

const deleteFromImcompleteList = (target) =>
  document.getElementById("incomplete-list").removeChild(target);

const deleteFromCompleteList = (target) =>
  document.getElementById("complete-list").removeChild(target);

const addImcompleteList = (text) => {
  // create div
  const div = document.createElement("div");
  div.className = "list-row";

  // create li
  const li = document.createElement("li");
  li.innerText = text;

  // create button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    const todoText = getTodoText(completeTarget);
    addCompleteList(todoText);
    deleteFromImcompleteList(completeTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromImcompleteList(deleteTarget);
  });

  // div -> li
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ul -> div
  document.getElementById("incomplete-list").appendChild(div);
};

const addCompleteList = (text) => {
  // create div
  const div = document.createElement("div");
  div.className = "list-row";

  // create li
  const li = document.createElement("li");
  li.innerText = text;

  // create button
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const backTarget = backButton.parentNode;
    const todoText = getTodoText(backTarget);
    addImcompleteList(todoText);
    deleteFromCompleteList(backTarget);
  });

  // div -> li
  div.appendChild(li);
  div.appendChild(backButton);

  // ul -> div
  document.getElementById("complete-list").appendChild(div);
};

const onClickAdd = () => {
  // get text from text box
  const inputText = document.getElementById("add-text").value;
  if (inputText === "") {
    alert("TODOを入力してください");
    return;
  }
  document.getElementById("add-text").value = "";

  addImcompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
