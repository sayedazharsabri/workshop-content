import { setTimeout } from "node:timers/promises";

async function delayMessage() {
  console.log("Starting a 2-second wait...");
  // Wait for two sec
  await setTimeout(2000);
  console.log("Waited 2 seconds! Done.");
}

delayMessage();
