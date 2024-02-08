/**
 * Create Array.prototype.last(). Return the last element of array and if array is empty then return -1
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];

  // or like below
  //   if (this.length) {
  //     return this[this.length - 1];
  //   } else {
  //     return -1;
  //   }
};

const arr = [23, 54];

console.log(arr.last());
