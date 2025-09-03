import { setImmediate } from "node:timers/promises";

async function runImmediately() {
  console.log("Task started.");
  // This will "wait" for the next tick of the event loop
  await setImmediate();
  console.log("Task continues after a short pause.");
}

console.log("First log.");
runImmediately();
console.log("This will log before the task continues.");
