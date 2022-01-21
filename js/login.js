const loginForm = document.querySelector(".loginForm");
const hello = document.querySelector(".helloUser");

const USER_ID = "userId";
const HIDDEN = "hidden";

function login(event){
  event.preventDefault();
  const userId = document.querySelector(".userId").value;
  localStorage.setItem(USER_ID, userId);
  loginForm.classList.add(HIDDEN);
  sayHello(userId);
}

function sayHello(userId){
  hello.classList.remove(HIDDEN);
  hello.innerText = `Hello, ${userId}!`;
}

const getId = localStorage.getItem(USER_ID);

if(getId === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", login);
} else{
  sayHello(getId);
}