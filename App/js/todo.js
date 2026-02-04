const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

let allTodos = getTodos();
updateTodoToUI();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodos();
});

function addTodos() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todoObject = {
      text: todoText,
      isCompleted: false,
    };
    allTodos.push(todoObject);
    saveTodos();
    updateTodoToUI();
    todoInput.value = "";
  }
}

function createTodoItems(todo, todoIndex) {
  const todoLi = document.createElement("li");
  todoLi.className = "todoLi";
  const todoId = `todo-${todoIndex}`;
  const todoText = todo.text;
  todoLi.innerHTML = `<input type="checkbox" id="${todoId}" />
          <label for="${todoId}" class="custom-checkbox">
            <i class="bx bx-check"></i>
          </label>
          <label for="${todoId}" class="todo-text">
            <span>${todoText}</span>
          </label>
          <button class="dlt-btn">
            <i class="bx bx-trash"></i>
          </button>`;
  let dltBtn = todoLi.querySelector(".dlt-btn");
  dltBtn.addEventListener("click", () => {
    allTodos.splice(todoIndex, 1);
    saveTodos();
    updateTodoToUI();
  });
  let checkbox = todoLi.querySelector("input");
  checkbox.addEventListener("change", () => {
    allTodos[todoIndex].isCompleted = checkbox.checked;
    saveTodos();
  });
  checkbox.checked = todo.isCompleted;
  return todoLi;
}

function updateTodoToUI() {
  todoUl.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItems(todo, todoIndex);
    todoUl.append(todoItem);
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
}
function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}
