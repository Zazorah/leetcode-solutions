// Problem: Number of Laser Beams in a Bank
// Difficulty: Medium
// Link: https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/?envType=daily-question&envId=2025-10-27

function numberOfBeams(bank: string[]): number {
  let total = 0;
  let lastRowCount = -1;

  for (const row of bank) {
    let currRowCount = 0;
    for (const spot of row) {
      if (spot == "1") {
        currRowCount += 1;
      }
    }

    if (currRowCount > 0) {
      if (lastRowCount != -1) {
        total += lastRowCount * currRowCount;
      }

      lastRowCount = currRowCount;
    }
  }

  return total;
}

// Test cases
console.log(numberOfBeams(["011001", "000000", "010100", "001000"])); // Expected: 8
console.log(numberOfBeams(["000", "111", "000"])); // Expected: 0
