/**
 * Write a program to create memoized version of that function
 *
 * */

function transformToMemoized(fn) {
  let cache = {};
  return function (...args) {
    // Key generate
    let key = "_";
    for (let value of args) {
      key += value + "_";
    }

    if (key in cache) {
      return cache[key];
    }

    // Make sure if key is in cache then return value from cache
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

let callCounter = 0;
function addition(num1, num2) {
  callCounter++;
  return num1 + num2;
}

const memoizedFunction = transformToMemoized(addition);

let result = memoizedFunction(2, 3);
console.log("Result = ", result);

result = memoizedFunction(2, 3);
console.log("Result = ", result);

result = memoizedFunction(2, 3);
console.log("Result = ", result);

result = memoizedFunction(5, 3);
console.log("Result = ", result);

console.log("Total number of call", callCounter);
