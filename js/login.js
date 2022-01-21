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

/*
function sayHello(userId){
  hello.classList.remove(HIDDEN);
  hello.innerText = `Hello, ${userId}!`;
}
*/

function sayHello(userId){
  hello.classList.remove(HIDDEN);
  const date = new Date();
  const hour = date.getHours();
  if(hour >= 5 && hour < 9){
    hello.innerText = `Good Morning, ${userId}!`;
  } else if(hour >= 9 && hour < 17){
    hello.innerText = `Good Afternoon, ${userId}!`;
  } else if(hour >= 17 && hour < 21){
    hello.innerText = `Good Evening, ${userId}!`;
  } else{
    hello.innerText = `Good Night, ${userId}!`;
  }
  
}

const getId = localStorage.getItem(USER_ID);

if(getId === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", login);
} else{
  sayHello(getId);
}

