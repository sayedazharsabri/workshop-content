// Write an asynchronous function that sleeps for n millis milliseconds

async function sleep(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

async function callSleep() {
  await sleep(5000);
  return "Finished";
}

callSleep().then((result) => {
  console.log(result);
});
