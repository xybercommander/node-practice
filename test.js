// console.log("Hi " + name);

// const greet = (name) => {
//     console.log(`Hello ${name}`);
// }

// greet('xyber');

// setTimeout(() => {
//     console.log('Hello Xyber');
// }, 3000);

// const int = setInterval(() => {
//     console.log('lol xyber');
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

const _ = require('lodash');

var a = [1, 2, 3, 4, 5, 6];
var b = _.chunk(a, 3);
console.log(b);