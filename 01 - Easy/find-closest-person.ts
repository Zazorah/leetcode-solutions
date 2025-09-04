// Problem: Find Closest Person
// Difficulty: Easy
// Link: https://leetcode.com/problems/find-closest-person/?envType=daily-question&envId=2025-09-04

function findClosest(x: number, y: number, z: number): number {
  const xDiff = Math.abs(x - z);
  const yDiff = Math.abs(y - z);

  if (xDiff < yDiff) {
    return 1;
  } else if (yDiff < xDiff) {
    return 2;
  }

  return 0;
}

// Test cases
console.log(findClosest(2, 7, 4)); // Expected: 1
console.log(findClosest(2, 5, 6)); // Expected: 2
console.log(findClosest(1, 5, 3)); // Expected: 0
