const todoForm = document.querySelector(".todoForm");
const todo = document.querySelector(".todo");

let todos = [];
const TODOS = "todos";

function storageTodo(event){
  event.preventDefault();
  const todoInput = todo.value;
  const object = {
    text: todoInput,
    id: Date.now()
  };
  todo.value = "";
  todos.push(object);
  paintingTodo(object);
  rememberTodo();
}

const ul = document.querySelector(".todoList");

function paintingTodo(object){
  const li = document.createElement("li");
  li.id = object.id;

  const span = document.createElement("span")
  span.innerText = object.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", removeTodo);

  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

function rememberTodo(){
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function removeTodo(event){
  const wantRemove = event.target.parentElement;
  wantRemove.remove();
  todos = todos.filter((todo) => todo.id != parseInt(wantRemove.id));
  rememberTodo();
}

todoForm.addEventListener("submit", storageTodo);

const rmTodo = localStorage.getItem(TODOS);

if(rmTodo != null){
  const parsedTodo = JSON.parse(rmTodo);
  todos = parsedTodo;
  todos.forEach(paintingTodo);
}
