// Problem: Find the Highest Altitude
// Difficulty: Easy
// Link: https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

// Easy Solution
function largestAltitude(gain: number[]): number {
  let result = 0,
    currentAltitude = 0;

  for (const inc of gain) {
    currentAltitude += inc;
    result = Math.max(result, currentAltitude);
  }

  return result;
}

// Prefix Sum solution
function _largestAltitude(gain: number[]): number {
  const n = gain.length;
  const altitudes = new Array(n);
  let result = 0;

  for (let i = 0; i < n; i++) {
    const currentElevation = i > 0 ? altitudes[i - 1] + gain[i - 1] : 0;
    result = Math.max(result, currentElevation);
    altitudes[i] = currentElevation;
  }

  return result;
}

// Test cases
console.log(largestAltitude([-5, 1, 5, 0, -7])); // Expected: 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // Expected: 0
