/*

Question: How to create your own map function for integer array

Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/

const map = function (arr, fn) {
  const modifiedArray = [];

  for (let index in arr) {
    modifiedArray.push(fn(+arr[index], +index));
  }
  return modifiedArray;
};

const userArr = [1, 2, 3, 4];

const plusOne = function (element, index) {
  return element + 1;
};

const addIndexInElement = function (element, index) {
  return element + index;
};

const result = map(userArr, addIndexInElement);

console.log(result);
