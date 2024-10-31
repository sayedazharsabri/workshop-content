/*
How to compare two objects manually
- function is attached to object
*/

function isEqual(obj2) {
  if (this.name === obj2.name && this.age === obj2.age) {
    for (let index = 0; index < this.hobbies.length; index++) {
      if (this.hobbies[index] !== obj2.hobbies[index]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

const emp1 = { name: "Abc", age: 28, hobbies: ["Badminton"], isEqual };

const emp2 = { name: "Abc", age: 28, hobbies: ["Badminton"], isEqual };

console.log(emp1.isEqual(emp2));
