const images = [
  "date1.jpg",
  "date2.jpg",
  "bunnylatte.jpg",
  "hongkong1.jpg",
  "hongkong2.jpg",
  "hongkong3.jpg",
  "hongkong4.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
