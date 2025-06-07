// function test(task) {
//   console.log(`Hello Good Morning ${task}`);
// }

// test("BreakFast");
const user = [{ userName: "Devanshu" }, { userName: "Manny" }];

const [user_one, user_two] = user;

console.log(user_one);

const { userName } = user_one;
console.log(userName);

// const { userName } = user_one;
// const { userName } = user_two;
