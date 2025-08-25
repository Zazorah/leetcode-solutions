// Problem: Dota2 Senate
// Difficulty: Medium
// Link: https://leetcode.com/problems/dota2-senate/?envType=study-plan-v2&envId=leetcode-75

function predictPartyVictory(senate: string): string {
  let currentQueue: string[] = senate.split("");
  let direBuffer = 0;
  let radiantBuffer = 0;

  let nextQueue = [];
  while (currentQueue.length > 0) {
    // Process Senator
    const senator = currentQueue.shift();
    if (senator === "R") {
      if (radiantBuffer > 0) {
        radiantBuffer--;
      } else {
        nextQueue.push(senator);
        direBuffer++;
      }
    }

    if (senator === "D") {
      if (direBuffer > 0) {
        direBuffer--;
      } else {
        nextQueue.push(senator);
        radiantBuffer++;
      }
    }

    // Check if We're Done
    if (currentQueue.length == 0) {
      const nextSet = new Set(nextQueue);
      currentQueue = [...nextQueue];
      nextQueue = [];

      // Exit when only one type remains.
      if (nextSet.size == 1) {
        break;
      }
    }
  }

  return currentQueue[0] === "R" ? "Radiant" : "Dire";
}
// Test cases
console.log(predictPartyVictory("RD")); // Expected: "Radiant"
console.log(predictPartyVictory("RDD")); // Expected: "Dire"
console.log(predictPartyVictory("DDRRR")); // Expected: "Dire"
