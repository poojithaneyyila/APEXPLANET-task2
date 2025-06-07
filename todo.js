
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  // Done Button
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  doneBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttons.appendChild(editBtn);
  buttons.appendChild(doneBtn);
  buttons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttons);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

