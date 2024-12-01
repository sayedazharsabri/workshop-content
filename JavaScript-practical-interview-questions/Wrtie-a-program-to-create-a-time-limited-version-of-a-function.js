// Wrtie a program to create a time limited version of a function
/*
Given an asynchronous function fn and a time t in milliseconds,
return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:
- If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
- If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
*/
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return (...args) => {
    return new Promise((res, rej) => {
      // Validation for time
      let id = setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then((data) => {
          clearInterval(id);
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };
};

async function call() {
  // Example 1
  //   fn = async (n) => {
  //     await new Promise((res) => setTimeout(res, 100));
  //     return n * n;
  //   };
  //   inputs = [5];
  //   t = 150;

  //   Example 2
  fn = async (a, b) => {
    await new Promise((res) => setTimeout(res, 120));
    return a + b;
  };
  inputs = [5, 10];
  t = 150;
  const limited = timeLimit(fn, t);
  const start = performance.now();
  let result;
  try {
    const res = await limited(...inputs);
    result = { resolved: res, time: Math.floor(performance.now() - start) };
  } catch (err) {
    result = { rejected: err, time: Math.floor(performance.now() - start) };
  }
  console.log(result); // Output
}

call().catch((err) => console.log("It shoud not fail ----", err));
