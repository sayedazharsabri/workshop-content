// Spread parameters
// Array - case
// let arr = [1,2,3,4,5,6,7,8];
// let arr1 = [11,23];
// let combined_arr = [...arr, ...arr1];
// console.log(combined_arr);
// console.log(...arr); // 1,2,3,4,5,6,7,8


let objStudent = {name:"Amir", age:18};

let objStudent1 = {...objStudent, city: "Jalandhar"};

console.log("objStudent: ",objStudent);
console.log("objStudent1: ",objStudent1);

objStudent1.name = "Ajit";
console.log("After Update objStudent1: ",objStudent1);
console.log("Again printing objStudent: ",objStudent);