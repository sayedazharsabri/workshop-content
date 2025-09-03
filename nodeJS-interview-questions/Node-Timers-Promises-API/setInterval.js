import { setInterval } from "node:timers/promises";

function* counter() {
  let count = 0;
  while (true) {
    yield ++count;
  }
}

(async function () {
  const counterIteratorObject = counter();

  for await (const _ of setInterval(1000)) {
    const count = counterIteratorObject.next().value;

    if (count > 5) {
      break;
    }
    console.log(`Tick ${count}`);
  }
  console.log("The timer has stopped!");
})();
