const person = {
    id: 1234,
    pname: "Xyz"
};


// const xyz = Symbol('xyz');
// person[xyz] = "Hidden Data";

// // console.log(person);
// // person.id = 2;
// // console.log(person);
// // console.log(Object.getOwnPropertyNames(person));

// // console.log(person.id);
// // console.log(person[xyz]);

// console.log(Object.getOwnPropertySymbols(person));
// const IamSmart = Symbol('xyz');
// console.log(person[IamSmart]);

// console.log(Symbol('xyz') == Symbol('xyz'));


// console.log(person[xyz]);


// Global Symbol

const xyz = Symbol.for('xyz');
person[xyz] = "Not hidden symbol data";
console.log(person[xyz]);
const iKnowThis = Symbol.for('xyz');
console.log(person[iKnowThis]);

