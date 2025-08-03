const taskList = document.getElementById("taskList");
const userInput = document.getElementById("userInput");
const buttonAddTask = document.getElementById("buttonAddTask");
const buttonClearInput = document.getElementById("buttonClearInput");

buttonAddTask.addEventListener("click", () => {
  clickTaskAdd();
});

buttonClearInput.addEventListener("click", () => {
  userInput.value = "";
  userInput.focus();
});


function clickTaskAdd() {
  if (userInput.value.trim() === "") return;

  const newLiElement = document.createElement("li");

  newLiElement.innerText = userInput.value;

  taskList.appendChild(newLiElement);

  userInput.value = "";
}
const todo = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => showTasksFromApi(json));

function showTasksFromApi(tasksJson) {
  console.log(tasksJson.userId);
  console.log(tasksJson.id);
  console.log(tasksJson.title);
  console.log(tasksJson.completed);

  for (let i = 0; i < tasksJson.length; i++) {
  
        const newLiElement = document.createElement("li");

        newLiElement.innerText = tasksJson[i].title;

        taskList.appendChild(newLiElement);

    }
}
