/*
Write a function argumentsLength that returns the count of arguments passed to it.

argumentsLength(5);
Output: 1


*/

function argumentsLength(...args) {
  return args.length;
}

const numberOfArgPassed = argumentsLength(2, 2);

console.log("Number of arguments passed to the function ", numberOfArgPassed);
