// 3 types
// declaration expression arrow - functions

//declaration function

// function sum() {
//   console.log("Helllo I am a sum function");
// }

// sum();

// function expression

// const multi = function () {
//   console.log("Hello I am a multi function");
// };

// multi();

// Arrow function (Es-6)

// const divide = () => {
//   console.log("Hello I am a divider function");
// };

// divide();

// parameters , arguments

// function sum(a, b = 2) {
//   console.log("Hello I am a Sum fun");
//   console.log("A Value :- " + a);
//   console.log("B value :- " + b);
//   console.log(a + b);
// }

// sum(1);

// return statement

// function add(x, y) {
//   const z = x * y;
//   //   console.log(z);
//   return z;
// }

// const returendValue = add(5, 6);  //  30
// console.log(returendValue);

function text() {
  let x = "Good Morning 😍";
  //   console.log(x);
  return x;
}

// const textValue; - undefiend

const textValue = text(); // Good Morning 😍
console.log(textValue);
