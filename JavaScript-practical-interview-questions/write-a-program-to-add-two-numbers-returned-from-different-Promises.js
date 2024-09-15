// Write a program to add two numbers, returned from different Promises

async function addTwoNumbers(promise1, promise2) {
  num1 = await promise1;
  num2 = await promise2;
  return num1 + num2;
}

addTwoNumbers(Promise.resolve(3), Promise.resolve(4)).then((sum) => {
  console.log("Sum = ", sum);
});
