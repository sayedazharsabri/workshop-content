// Write a counter function using closure, and provide option to set the starting value.

function createCounter(count) {
  return function () {
    return count++;
  };
}

const customCounter = createCounter(20);

console.log(customCounter());
console.log(customCounter());
console.log(customCounter());
