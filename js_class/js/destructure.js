// const myArray = ["dev", "manny", 78, 90];

// // const valueOftext = myArray[1];

// // console.log(valueOftext);

// const [student_one, student_two, marks_one, marks_two] = myArray;

// console.log(student_one);
// console.log(marks_one);

// const myObj = {
//   firstName: "Devanshu",
//   lastName: "Sharma",
//   address: {
//     city: "Jaipur",
//     pincode: 4567,
//   },
// };

// const {
//   firstName,
//   lastName,
//   address: { city, pincode },
// } = myObj;

// console.log(firstName);
// console.log(city);

const myData = [
  { user: "Devanshu", age: 67 },
  { user: "Aman", age: 78 },
];

const [user_one, user_two] = myData;

const { user, age } = user_one;

console.log(`UserName :- ${user} Age :- ${age}`);
