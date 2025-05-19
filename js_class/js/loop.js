// for loop

// for (let i = 1; i <= 7; i += 2) {
//   //   console.log(i);
//   if (i === 7) {
//     console.log("Bhaii Loop break " + i);
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   console.log("Hello Good Morning");
// }

// while loop

// let i = 1;

// while (i <= 5) {
//   console.log(`Devanshu Sir ${i}`);
//   i++;
// }

// let i = 1;

// while (i <= 3) {
//   if (i === 2) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

// let i = 1;

// while (i <= 5) {
//   i++;
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
// }

// do while loop

// i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for of loop

// const cars = ["Bmw", "Honda", "MG", "Tata"];

// for (let allcars of cars) {
//   console.log(allcars);
// }

// const cars = ["Bmw", "Honda", "MG", "Tata"];
// // index -     0        1       2      3

// // console.log(cars.length);

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for in loop

// const Student = {
//   studentName: "Devanshu",
//   studentAge: 34,
// };

// // console.log(Student["studentName"]);

// for (let keys in Student) {
//   console.log(Student[keys]);
// }

const cars = ["Bmw", "Honda", "MG", "Tata"];

for (let keys in cars) {
  console.log(cars[keys]);
}
