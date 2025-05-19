const prompt = require("prompt-sync")();

// let age = prompt("Enter Your age :- ");

// if (age >= 18) {
//   console.log("You are eligible for vote");
// } else if (age < 18) {
//   console.log("You are not eligible for vote");
// } else {
//   console.log("Invalid Input");
// }

// prompt - pacakage
// install = npm init -y
// npm i prompt-sync
// const prompt = require("prompt-sync")()

// calculator

// const num1 = parseInt(prompt("Enter First Number :- "));
// const num2 = parseInt(prompt("Enter Second Number :- "));
// const operator = prompt("Enter Your Operator (+,-,*./):- ");

// let result = "";

// if (operator == "+") {
//   result = num1 + num2;
// } else if (operator == "-") {
//   result = num1 - num2;
// } else if (operator == "*") {
//   result = num1 * num2;
// } else if (operator == "/") {
//   result = num1 / num2;
// } else {
//   result = "Invalid Value ";
// }

// console.log(num1 + operator + num2 + " = " + result);\

// let age = "gfhjk";

// condition ? statement : condition ? statement : statement;

// age >= 18
//   ? console.log("You are eligible for driving")
//   : age < 18
//   ? console.log("You are not eligible for driving")
//   : console.log("Invaldi value ");

// switch statements

let job_type = "teacheassasr";

switch (job_type) {
  case "teacher":
    console.log("Hello You are a teacher");
    break;

  case "doctor":
    console.log("Hello Yor are a doctor");
    break;

  case "driver":
    console.log("Hello Yor are a driver");
    break;

  case "shopkeeper":
    console.log("Hello you are a shopkeeper");
    break;

  default:
    console.log("Invalid Input");
    break;
}
