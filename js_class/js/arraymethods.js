// const myArray = ["Devanshu", "Hello", 67, true];

// map forEach

// myArray.map((value, index) => {
//   console.log(`Values:- ${value}  Index :- ${index}`);
// });

// myArray.forEach((value, index) => {
//   console.log(`Value :- ${value} Index:- ${index}`);
// });

// const myArray = ["Dev", "Manny", 78, 89];

// const returendValue = myArray.forEach((value, index) => {
//   return value;
// });

// console.log(returendValue);

// const returendValue = myArray.map((value, index) => {
//   return value;
// });

// console.log(returendValue);

// filter

// const myArray = [56, 98, 76, 45, 34, 23, 45, 89];

// const filterdValue = myArray.filter((value, index) => {
//   return value > 50;
// });

// console.log(filterdValue);

// reduce

const myArray = [1, 2, 3, 4, 5];

const returendValue = myArray.reduce((acc, value, index) => {
  return acc + value;
}, 2);

/*
acc = 2 value = 1 = 3
acc = 3 value = 2 = 5
acc = 5 value = 3 = 8
acc = 8 value = 4 = 12
acc 12 value = 5 = 17
acc = 17 value = ? break 
final result = 17
*/

/**
 acc = 1 value = 2  - 3
 acc = 3 value = 3  - 6
 acc = 6 value = 4  - 10
 acc = 10 value = 5  - 15
 acc = 15 value = ?  - breake

 final result = 15

 */

console.log(returendValue);
