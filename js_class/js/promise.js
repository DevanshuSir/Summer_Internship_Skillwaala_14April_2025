// Promise - ?

// json - javaScript object notation

// setTimeout(() => {
//   console.log("Hello class");
// }, 2000); // milisec = 1000 milisec = 1sec

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Order A pizza 😍");
//     // resolve({ message: "Pizza Delivered" });
//     reject({ message: "Pizza Cancelled" });
//   }, 2000);
// });

// myPromise.then((res) => {
//   console.log(res);
// });

// myPromise.catch((error) => {
//   console.log(error);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Order a pizza 😍");

//     let order = false;

//     if (order) {
//       resolve({ message: "Pizza Delivered" });
//     } else {
//       reject({ message: "Pizza Cancelled" });
//     }
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const data = fetch("http://dummydata/");

// console.log(data);

// fetch("https://dummyjson.com/products/")
//   .then((res) => {
//     return res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function data() {
  try {
    const product = await fetch("https://dummyjson.comm/products/");
    const result = await product.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// console.log(data());

data();
