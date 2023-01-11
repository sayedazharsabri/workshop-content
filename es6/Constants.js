// Constants
//
// Constants
// Support for constants (also known as "immutable variables"), 
// i.e., variables which cannot be re-assigned new content. 
// Notice: this only makes the variable itself immutable, not its assigned content 
// (for instance, in case the content is an object, this means the object itself can still be altered).

//Example 1
//const a = 5;
//console.log(a);
//a = 7 //TypeError: Assignment to constant variable.
//console.log(a);


//Example2
const obj = {name: "Fazal", age:28};
console.log("Before",obj);

// Is the below will work???
// obj = {name: "Azhar", age: 30};//TypeError: Assignment to constant variable.
// console.log("After", obj);

// Then how to change the content?
obj.name =  "Azhar";
obj.age = 30;
console.log("After",obj);




