/*
How to compare two objects manually
- Seprate function
*/

function isEqual(obj1, obj2) {
  if (obj1.name === obj2.name && obj1.age === obj2.age) {
    for (let index = 0; index < obj1.hobbies.length; index++) {
      if (obj1.hobbies[index] !== obj2.hobbies[index]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

const emp1 = { name: "Abc", age: 28, hobbies: ["Badminton"] };

const emp2 = { name: "Abc", age: 28, hobbies: ["Badminton"] };

console.log(isEqual(emp1, emp2));
