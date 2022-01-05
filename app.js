const greetings = "hi";
let name = "david";

// greetings = "what's up";
// console.log(greetings + "can const be changed? no");

console.log(greetings + " my name is " + name);
// alert(greetings + " my name is " + name);

name = "HJ :)";
console.log(greetings + " my name is " + name);

arr = [1, 2, 3, 4, 5, "yes"];
arr.push(name);
console.log(arr);
// alert(arr);

const person = {
  name: "kevin",
  gender: "male",
  age: 32,
  muscular: false,
  saySomething: function (speech) {
    tmp = "Hi so last weekend was awesome! you are not gonna believe it! so..";
    console.log(tmp);
    // alert(tmp);
  },
};
person.saySomething();
console.log(
  "person's name: " + person.name + "\nperson's gender: " + person.gender
);
person.gender = "female";
console.log(
  "can you change const field member? yes.. the person's gender is now : " +
    person.gender
);

const age = parseInt(prompt("insert your age"));
console.log(typeof age);
32;
if (isNaN(age)) {
  alert("the inserted age is not a number: " + age);
} else {
  alert("the inserted age is " + age);
}
