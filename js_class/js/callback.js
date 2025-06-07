function task(a, b, task, callback) {
  console.log(`Hello I am a ${task} 😍`);
  console.log(`${a} * ${b} = ${a * b}`);
  callback();
}

function callBack_one() {
  console.log("Hello I am a callback Fun 🌎");
}

function callback_two() {
  console.log("Hello I am a second callback Fun 🔍");
}

task(3, 4, "some new Task", callBack_one);
task(1, 2, "Make Tea", callback_two);

// function task(a, b, task) {
//   console.log(`Hello I am a ${task} 😍`);
//   console.log(`${a} * ${b} = ${a * b}`);
//   callBack_one();
//   callback_two();
// }

// function callBack_one() {
//   console.log("Hello I am a callback Fun 🌎");
// }

// function callback_two() {
//   console.log("Hello I am a second callback Fun 🔍");
// }

// task(4, 5, "New Task");

// task(2, 3, "Another Task");
