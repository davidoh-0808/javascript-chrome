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

const p = document.querySelector(".paragraph h4"); //querySelectorAll
// console.log(p.textContent.trim());
const pContent = p.textContent.trim();

// Event Listener
p.addEventListener("click", clickElement);
p.addEventListener("mouseleave", mouseLeave);
function clickElement() {
  p.style.color = "lime";
  console.log(`The element ${pContent} is clicked`);
}
function mouseLeave() {
  p.style.color = "black";
  console.log("The mouse has left the element");
}
