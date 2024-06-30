/*
write-a-counter-function-with-increment-decrement-and-reset-options

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

function createCounter(initialVal) {
  let counter = initialVal;
  function increment() {
    counter++;
    return counter;
  }

  function decreament() {
    counter--;
    return counter;
  }

  function reset() {
    counter = initialVal;
    return counter;
  }

  return { increment, decreament, reset };
}

const myCounter = createCounter(1000);

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());

console.log(myCounter.decreament());

console.log(myCounter.reset());

console.log(myCounter.increment());
