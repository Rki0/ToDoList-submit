const clock = document.querySelector(".clock");

function timeUpdate(){
  const today = new Date();
  const hour = String(today.getHours()).padStart(2,0);
  const min = String(today.getMinutes()).padStart(2,0);
  const sec = String(today.getSeconds()).padStart(2,0);
  clock.innerText = `${hour}:${min}:${sec}`;
}

timeUpdate();
setInterval(timeUpdate, 1000);

const calendar = document.querySelector(".calendar");
const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function dateUpdate(){
  const date = new Date();
  const year = date.getFullYear();
  /**getmonth()는 1월이 0으로 표시되기 때문에 +1을 해주는게 맞지만, monthList에서는 1월(Jan)의 index가 0번이므로 +1을 안해도 된다. */
  const month = monthList[date.getMonth()];
  const day = String(date.getDate()).padStart(2, 0);
  calendar.innerText = `${month}.${day}, ${year}`;
}

dateUpdate();