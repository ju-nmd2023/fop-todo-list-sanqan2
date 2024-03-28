document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  if (task !== "") {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ name: task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
    console
  }
}
// Need to show and then delete
//how?? 
//At least I think i mange to store it 