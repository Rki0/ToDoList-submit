const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".writeTodo");

let todoList = [];

function addList(event){
  event.preventDefault();
  const what = todoInput.value;
  const localObject = {
    todo: what,
    id: Date.now(),
  };
  todoList.push(localObject);
  todoInput.value = "";
  paintList(localObject);
  storageList();
}

const ul = document.querySelector(".todoList");

/*
function paintList(object){
  const li = document.createElement("li");
  li.id = object.id;

  const span = document.createElement("span");
  span.innerText = object.todo;

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", removeList);

  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);
}
*/

let inputNum = 0;

function paintList(object){
  const li = document.createElement("li");
  li.id = object.id;

  const span = document.createElement("span");
  span.innerText = object.todo;

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.id = `inputId${inputNum}`;
  
  if(input.id.checked){
    span.style.textDecoration = "line-through";
  }
  
  inputNum += 1;


  const label = document.createElement("label");
  label.setAttribute("for", input.id);

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", removeList);


  li.appendChild(span);
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(btn);
  ul.appendChild(li);
}

function removeList(event){
  const remo = event.target.parentElement;
  remo.remove();
  todoList = todoList.filter((todo) => todo.id != parseInt(remo.id));
  storageList();
}



todoForm.addEventListener("submit", addList);

const TODO_OBJECT = "todoObject";

function storageList(){
  localStorage.setItem(TODO_OBJECT, JSON.stringify(todoList));
}

const getList = localStorage.getItem(TODO_OBJECT);

if(getList != null){
  const parsedList = JSON.parse(getList);
  todoList = parsedList;
  parsedList.forEach(paintList);
}