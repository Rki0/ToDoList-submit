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
    const span = document.createElement("span");
    span.innerText = "Good Morning";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-coffee");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else if(hour >= 9 && hour < 17){
    const span = document.createElement("span");
    span.innerText = "Good Afternoon";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-sun");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else if(hour >= 17 && hour < 21){
    const span = document.createElement("span");
    span.innerText = "Good Evening";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-utensils");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else{
    const span = document.createElement("span");
    span.innerText = "Good Night";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-moon");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  }
}

const getId = localStorage.getItem(USER_ID);

if(getId === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", login);
} else{
  sayHello(getId);
}

