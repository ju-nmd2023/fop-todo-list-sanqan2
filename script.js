document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function addTask() {
  var input = document.getElementById("taskInput"); //write task in taskInput and store it in tasks also put in a list
  var task = input.value.trim();
  if (task !== "") {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ name: task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
    console;
  }
}
function loadTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task, index) {
    var li = document.createElement("li");
    li.className = "todo-item";
  });
}
//Check
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = task.done;

//Delete
var deleteBtn = document.createElement("span");
deleteBtn.className = "delete-btn";
