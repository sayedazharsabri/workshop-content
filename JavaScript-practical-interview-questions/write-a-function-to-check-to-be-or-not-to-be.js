/* 
Write a function to check To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

1. toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".

2. notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

*/

function expect(value) {
  const toBe = (newValue) => {
    if (value === newValue) {
      return true;
    }
    throw new Error("Not Equal");
  };

  const notToBe = (newValue) => {
    if (newValue !== value) {
      return true;
    }
    throw new Error("Equal");
  };

  return { toBe, notToBe };
}

console.log("----------toBe----------------");
const newValueToCheck = 5;
console.log(expect(5).toBe(newValueToCheck));
try {
  console.log(expect(5).toBe(4));
} catch (error) {
  console.log("Exception", error.message);
}

console.log("----------notToBe----------------");
console.log(expect(7).notToBe(6));
try {
  console.log(expect(7).notToBe(7));
} catch (error) {
  console.log("Exception", error.message);
}
