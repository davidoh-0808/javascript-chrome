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
p.addEventListener("click", handleClick);
p.addEventListener("copy", handleCopy);
p.addEventListener("mouseenter", handleMouseEnter);
p.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);

function handleClick() {
  p.style.color = "lime";
  p.innerText = "text is clicked!";
  console.log(`The element ${pContent} is clicked`);
}
function handleCopy() {
  alert(`${p.innerText} copied!`);
}
function handleMouseEnter() {
  p.style.color = "black";
  p.innerText = "paragraph";
  console.log("The mouse has entered the element");
}
function handleMouseLeave() {
  p.style.color = "black";
  p.innerText = "mouse has left the text!";
  console.log("The mouse has left the element");
}
function handleWindowResize() {
  document.body.style.backgroundColor = "orange";
  console.log(window.event);
}
