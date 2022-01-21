const images = ["1.jpeg","2.jpg","3.jpeg","4.jpeg"];

const randImg = images[Math.floor(Math.random()*images.length)];

const img = document.createElement("img");
img.src = `images/${randImg}`;

document.body.appendChild(img);