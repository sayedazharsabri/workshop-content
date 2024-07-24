/*
Array Reduce Transformation

Question: How to create your own reduce function for integer array

Given an integer array nums, a reducer function fn, and an initial value init, 
return the final result obtained by executing the fn function on each element of the array, 
sequentially, passing in the return value from the calculation on the preceding element.


If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

Example:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10

Example
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130

Example
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
*/

function reduce(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  let result = init;
  for (let num of nums) {
    result = fn(result, num);
  }
  return result;
}

const nums = [];
fn = function sum(accum, curr) {
  return 0;
};
init = 25;

console.log(reduce(nums, fn, init));
