const temp = document.querySelector(".temp");
const loc = document.querySelector(".location");

const API = "14a8172ae2a4887e871f9d897faea290";

function get(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    temp.innerText = `${data.weather[0].main},${data.main.temp}`
    loc.innerText = `${data.name}, ${data.sys.country}`;
  });
}

function fail(){
  temp.innerText = "No Data";
  loc.innerText = "No Data"
}

navigator.geolocation.getCurrentPosition(get,fail);