const { setInterval } = require("node:timers/promises");
const interval = 100;

(async function () {
  const startTime = Date.now();
  for await (const tick of setInterval(interval, "Tick")) {
    const now = Date.now();
    console.log(tick);
    if (now - startTime > 5000) break;
  }
  console.log(Date.now());
})();
