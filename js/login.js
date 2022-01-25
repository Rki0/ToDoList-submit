const loginForm = document.querySelector(".loginForm");
const userId = document.querySelector(".userId");
const hello = document.querySelector(".hello");

const USER_ID = "userId";
const HIDDEN = "hidden";

function helloUser(event){
  event.preventDefault();
  const who = userId.value;
  localStorage.setItem(USER_ID, who);
  loginForm.classList.add(HIDDEN);
  showHello(who);
}

function showHello(userId){
  const date = new Date();
  const hour = date.getHours();
  if(hour >= 5 && hour < 9){
    const span = document.createElement("span");
    span.innerText = "Good Morning ";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-coffee");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else if(hour >= 9 && hour < 17){
    const span = document.createElement("span");
    span.innerText = "Good Afternoon ";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-sun");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else if(hour >= 17 && hour < 21){
    const span = document.createElement("span");
    span.innerText = "Good Evening ";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-utensils");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else{
    const span = document.createElement("span");
    span.innerText = "Good Night ";

    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-moon");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  }
  hello.classList.remove(HIDDEN);
}

const savedId = localStorage.getItem(USER_ID);

if(savedId === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", helloUser);
} else{
  showHello(savedId);
}