// Problem: Smallets Number with All Set Bits
// Difficulty: Easy
// Link: https://leetcode.com/problems/smallest-number-with-all-set-bits/?envType=daily-question&envId=2025-10-29

function smallestNumber(n: number): number {
  // Convert starting number to binary.
  const nBinary = n.toString(2);

  // Return starting number if all bits are set.
  if (!nBinary.includes("0")) {
    return n;
  }

  // Set all bits to 1.
  const newBinary = "1".repeat(nBinary.length);

  // Convert newBinary to Number and return.
  return parseInt(newBinary, 2);
}

// Test cases
console.log(smallestNumber(5)); // Expected: 7
console.log(smallestNumber(10)); // Expected: 15
console.log(smallestNumber(3)); // Expected: 3
