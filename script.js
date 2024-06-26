//Load the task directly when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function addTask() {
  let input = document.getElementById("taskInput"); //write task in taskInput
  let task = input.value.trim();
  if (task !== "") {
    //Check if the input is emty
    //Ask LocalStorage what already exists
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    //Add the new task
    tasks.push({ name: task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
    console;
  }
}
function loadTasks() {
  //Here I connect to the html list by ID
  let taskList = document.getElementById("taskList");
  //Get from the list in the html here
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.className = "todo-item";

    //Check
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    //The event of a click
    checkbox.addEventListener("change", function () {
      tasks[index].done = this.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    let label = document.createElement("label");
    label.textContent = task.name;

    li.appendChild(checkbox);
    li.appendChild(label);

    //Delete
    //<--- The folowing 5 lines of code was used from chat gpt https://chat.openai.com/share/1ec92950-a263-4a72-823d-2a0aba6889c9 --->
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);

      //Load the new arrey into localstoarge after the delete
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
