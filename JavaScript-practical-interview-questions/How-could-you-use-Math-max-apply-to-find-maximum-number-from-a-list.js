// Question - How could you use Math.max - apply to find maximum number from a list

const numList = [2, 13, 7, 9, 11];

const maximumNum = Math.max.apply(null, numList);

// const maximumNum = Math.max(...numList);

console.log(maximumNum);
