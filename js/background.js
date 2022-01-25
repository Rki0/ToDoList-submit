const images = ["1.jpeg","2.jpg","3.jpeg","4.jpeg"];

const img = document.createElement("img");
img.src = `images/${images[Math.floor(Math.random()*images.length)]}`;

document.body.appendChild(img);