// const mySecondArray = myArray;

// mySecondArray[1] = "Hello";

// console.log(myArray);
// console.log(mySecondArray);

// spread operator - ...copy - unpack
// const myArray = ["devanshu", "Manny", 89, 67];
// const mySecondArray = [...myArray]; // shallow  copy

// // const mySecondArray = Array.from(myArray);

// myArray[2] = "Hello class";

// mySecondArray[2] = "Skillwaala";

// console.log(myArray);
// console.log(mySecondArray);

// const obj_one = {
//   user: "Dev",
//   age: 67,
//   address: {
//     city: "jaipur",
//     pincode: 8867,
//   },
// };

// const obj_two = { ...obj_one };

// obj_one.age = 34;
// obj_one.address.city = "Ajmer";

// console.log(obj_one);
// console.log(obj_two);

// const obj_one = {
//   user: "Dev",
//   age: 67,
//   address: {
//     city: "jaipur",
//     pincode: 8867,
//   },
//   allDetails: function () {
//     console.log("All Details Function 😍");
//   },
// };

// const obj_two = JSON.parse(JSON.stringify(obj_one));

// obj_two.address.city = "Ajmer";

// console.log(obj_one);
// console.log(obj_two);

// const obj = {
//   name: "Dev",
//   age: 45,
//   skills: ["Mongodb", "React", "express", "nodejs"],
//   address: {
//     city: "Jaipur",
//     pincode: 45678,
//   },
//   IsMerried: true,
// };

// console.log(JSON.parse(JSON.stringify(obj)));
