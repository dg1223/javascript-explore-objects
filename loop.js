const numbers = [12, 54, 65, 3, 54];
for (const number of numbers) {
  //   console.log(number);
}

const bottle = { color: "yellow", price: 50, isClean: true, capacity: 1 };
// for (const key of bottle) {
//   console.log(key);
// }

// Three ways to read JavaScript object properties:
// - Dot notation (e.g. `object.property`)
// - Square bracket notation with a string key (e.g. `object["property"]`)
// - Square bracket notation with a variable key (e.g. `object[variable]`)

// 1. loop through an object
const keys = Object.keys(bottle);
// console.log(keys);

for (const key of keys) {
  //   console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
  //   console.log(key);
}

// advanced
const pair = Object.entries(bottle);
// console.log(pair)

for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
