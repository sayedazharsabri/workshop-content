/*
How to compare two objects using lodash
npm install lodash
*/

const _ = require("lodash");
const emp1 = { name: "Abc", age: 28, hobbies: ["Badminton"] };

const emp2 = { name: "Abc", age: 28, hobbies: ["Badminton"] };

console.log(_.isEqual(emp1, emp2));
