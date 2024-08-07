/*
Given a function fn, return a new function that is identical to the original function 
except that it ensures fn is called at most once.

- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.
*/

function restricMultipleCall(fn) {
  let isCallingFirstTime = true;
  return function (...args) {
    if (isCallingFirstTime) {
      isCallingFirstTime = false;
      return fn(...args);
    }
    return undefined;
  };
}

const myFunction = (n1, n2) => n1 + n2;
// console.log(myFunction(2, 3)); // ==> 5

const myFunctionOnlyOneCallAllowed = restricMultipleCall(myFunction);

console.log(myFunctionOnlyOneCallAllowed(2, 3));

console.log(myFunctionOnlyOneCallAllowed(2, 4));
