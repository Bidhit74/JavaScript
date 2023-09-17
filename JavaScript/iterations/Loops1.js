// for of

// ["", "", ""] // Array inside a string
// [{}, {}, {}] // Array inside a object

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "Hello world!";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

// Maps

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// map.clear();
// map.delete("IN");
// map.set("IN", "India"); // duplicated values not accepted in map

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// const myObject = {
//   game1: "NFS",
//   game2: "Spider"
// };

// for (const [key, value] of myObject) { // This is not iterable
//   console.log(key, ":-", value);
// }

// =============== For in loop =================================

// const myObject = {
//   js: "javascript",
//   cpp: "C++",
//   rb: "ruby",
//   swift: "swift by apple"
// };

// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//   //console.log(programming[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key]);
}