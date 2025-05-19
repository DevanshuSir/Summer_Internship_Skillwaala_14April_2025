//primitive data types
// string - "" '' ``

// let firstName = "devanshu";

// let lastName = "Sharma";

// const age = `12`;

// // typeof

// console.log(firstName + " Type of firstName :- " + typeof firstName);
// console.log(age + " Type of age :- " + typeof age);

// number - 12 , 13 , 12.5

// const age = 12.9;
// console.log(age + " Type of age :- " + typeof age);

// undefiend

// let sum;

// console.log(sum + " Data Type :- " + typeof sum);

// boolean - true / false

// let isMarried = false;

// console.log(isMarried + " Data Type :- " + typeof isMarried);

// null

// bug - obj - 000 null - 000
// let text = null;

// console.log(text + " Data Type :- " + typeof text);

// symbol

// let sym1 = Symbol("id"); // unique value
// let sym2 = Symbol("id"); // unique value

// console.log(sym1 == sym2);

//non -  primitive data types

// object , array

// array - [] - key value paire

// const myArray = ["manny", 67, "aman", true];
// // index/key -     0       1     2     3

// console.log(myArray[1]);

// objcet - {} - key value

let obj = {
  studentName: "devanshu",
  studentRollno: 456,
  studentAge: 23,
  address: {
    city: "jaipur",
    pincode: 12345,
  },
  marks: [1, 3, 5, 6],
};

console.log(obj.address.pincode);
console.log(obj.marks[3]);
