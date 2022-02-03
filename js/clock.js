const showDate = document.querySelector(".date");
const showTime = document.querySelector(".clock");

function whatDate(){
  const date = new Date();
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const getmonth = date.getMonth();
  const month = monthName[getmonth];
  const day = String(date.getDate()).padStart(2,0);
  const year = date.getFullYear();
  showDate.innerText = `${month}. ${day}, ${year}`;
}

whatDate();

function whatTime(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,0);
  const min = String(date.getMinutes()).padStart(2,0);
  const sec = String(date.getSeconds()).padStart(2,0);
  showTime.innerText = `${hour}:${min}:${sec}`;
}

whatTime();
setInterval(whatTime, 1000);