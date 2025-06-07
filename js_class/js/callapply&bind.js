// const obj_one = {
//   studentName: "Devanshu",
//   studentClass: 12,
//   studentAddress: {
//     city: "jaipur",
//     pincode: 34567,
//   },
//   allDetails: function () {
//     console.log(
//       `StudentName:- ${this.studentName} StudentClass:- ${this.studentClass}`
//     );
//   },
// };

// obj_one.allDetails();

// const obj_two = {
//   studentName: "Aman",
//   studentClass: 11,
//   studentAddress: {
//     city: "Ajmer",
//     pincode: 345,
//   },
// };

// obj_one.allDetails.call(obj_two);

// const obj_three = {
//   studentName: "Manny",
//   studentClass: 12,
//   studentAddress: {
//     city: "Ajmer",
//     pincode: 345,
//   },
// };

// obj_one.allDetails.call(obj_three);

const allProductDetails = function (productAddress) {
  console.log(
    `Productname :- ${this.productName} Productprice:- ${this.productPrice} Productaddress :- ${productAddress}`
  );
};

const product_one = {
  productName: "I-Phone",
  productPrice: "$56",
};

const product_two = {
  productName: "Tv",
  productPrice: "$51",
};

const product_three = {
  productName: "Laptop",
  productPrice: "$23",
};

// allProductDetails.call(product_one, "Jaipur");
// allProductDetails.call(product_two, "Ajmer");
// allProductDetails.call(product_three, "Goa");

// allProductDetails.apply(product_one, ["ajmer"]);

// const product_one_details = allProductDetails.bind(product_one, "Jaipur");
// // console.log(product_one_details);
// product_one_details();

const product_two_details = allProductDetails.bind(product_two, "Ajmer");
// console.log(product_two_details);
product_two_details();
