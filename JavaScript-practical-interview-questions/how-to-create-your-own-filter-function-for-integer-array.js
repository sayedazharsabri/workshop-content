/*
Question: How to create your own filter function for integer array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. 
- A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/
const filter = (arr, fn) => {
  const filterArray = [];

  for (let index in arr) {
    const element = arr[index];
    let isValid = fn(+element, +index);
    if (isValid) {
      filterArray.push(element);
    }
  }

  return filterArray;
};
const arr = [0, 1, 10, 3, 21];

// Example 1
// const fn = function valueLessThan5(val, index) {
//   if (val < 5) {
//     return true;
//   }
//   return false;
// };

// Example 2
const fn = function indexAndValueAreEqual(val, index) {
  if (val === index) {
    return true;
  }
  return false;
};

const newArray = filter(arr, fn);

console.log(newArray);
