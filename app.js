document.title = "chnaged by javascript";
const title = document.getElementById("change-title");
title.innerHTML = "changing the title with javascript!";
console.dir(title);
console.log("the title content is " + title.innerHTML);
console.log("the class is " + title.className);

// use getElementsByID or getElementByTagName()
const paragraph = document.getElementsByTagName("h4");
console.log(paragraph[0].innerText);
// or use querySelector()
// const p = document.querySelectorAll(".paragraph:first-child h4");
const p = document.querySelector(".paragraph");
