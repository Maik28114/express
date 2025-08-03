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
  // Textfeld darf nicht leer sein
  if (userInput.value.trim() === "") return;

  // Neues Listenelement erstellen
  const newLiElement = document.createElement("li");

  // Inhalt setzen
  newLiElement.innerText = userInput.value;

  // In DOM einfügen
  taskList.appendChild(newLiElement);

  // Eingabefeld leeren
  userInput.value = "";
}

// jetzt laden wir eine Liste mit Aufgaben von einem Backend bzw. von einer API
const todo = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => showTasksFromApi(json));

// wir schreiben eine Funktion um diese Daten jetzt in unsere Seite einzubinden
function showTasksFromApi(tasksJson) {
  console.log(tasksJson.userId);
  console.log(tasksJson.id);
  console.log(tasksJson.title);
  console.log(tasksJson.completed);

  for (let i = 0; i < tasksJson.length; i++) {
        // erstelle frisches Element
        const newLiElement = document.createElement("li");

        // fülle Element mit user input
        newLiElement.innerText = tasksJson[i].title;

        // füge den das neue Element in den bestehenden html Baum ein
        taskList.appendChild(newLiElement);

    }
}
