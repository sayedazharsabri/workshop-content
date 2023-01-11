//Being able to use an Object as a key is an important Map feature.

const student1 = {sname: "Azhar"};
const student2 = {sname: "Ramesh"};

const studentMap = new Map();

studentMap.set("key1", 12);
// console.log(studentMap.get("key1"));

studentMap.set(student1," He is average student");
studentMap.set(student2, " He is good student");

console.log(studentMap);