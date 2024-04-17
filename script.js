//Load the task directly when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function addTask() {
  let input = document.getElementById("taskInput"); //write task in taskInput and store it in tasks also put in a list
  let task = input.value.trim();
  if (task !== "") {//Check if the input is emty
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ name: task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
    console;
  }
}
function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.className = "todo-item";

    //Check
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", function () {
      tasks[index].done = this.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    let label = document.createElement("label");
    label.textContent = task.name;

    li.appendChild(checkbox);
    li.appendChild(label);

    //Delete
    //<--- The folowing 5 lines of code was used from chat gpt https://chat.openai.com/ --->
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);

      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
