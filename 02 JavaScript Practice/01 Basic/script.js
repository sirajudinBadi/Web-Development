// Here I will be sharing my practice file that I have created while practicing the JavaScript Concepts.
let str1 = "1";
console.log(str1 + 32);

console.log(typeof str1);

let obj1 = {
  name: "Rohan",
  "phone number": "7878546892",
  marks: 52,
};

obj1.school = "Nalanda";
console.log(obj1);

for (let i = 0; i++, i < 11; ) {
  console.log(i);
}
let i = 5;
while (i < 11) {
  console.log(i);
  i++;
}

for (const key in obj1) {
  // if (Object.prototype.hasOwnProperty.call(object, key)) {
  const element = obj1[key];
  console.log(key, element);
}

// Faulty Calculator
// console.log(randomNum);
function faultyCalc(a, b) {
  let randomNum = Math.floor(Math.random() * 100);
  let condi = randomNum <= 10 ? "True" : "False";
  console.log(condi);
  if (randomNum <= 10) {
    console.log("Sum = ", a - b);
    console.log("Multiplication = ", a + b);
    console.log("Subrtraction = ", a / b);
    console.log("Division = ", a ** b);
  } else {
    console.log("Sum = ", a + b);
    console.log("Multiplication = ", a * b);
    console.log("Subrtraction = ", a - b);
    console.log("Division = ", a / b);
  }
}

let a = parseInt(prompt("A = ?"));
let b = parseInt(prompt("B = ?"));
console.log(typeof a, typeof b);
faultyCalc(a, b);

// Business Name Generator
let a = "Crazy Amazing Fire ";
let random = Math.floor(Math.random() * a.length);
let last = null;
if (random == 0 || a[random - 1] == " ") {
  for (let char of a) {
    if (char != " ") {
      last = a.indexOf(char);
      break;
    } else {
      continue;
    }
  }
  console.log(a.slice(random, last));
} else {
  console.log("False");
}

let arr = [1, 2, 3, 4, 5, 6, 4];
let str = arr.toString();
// console.log(str);

let str1 = "Hello";

let arr1 = str1.split("");
let revArr = arr1.reverse();
let finalArr = arr1.join("");
console.log(arr.split("").reverse().join(""));
