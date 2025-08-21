// Problem: Unique Number of Occurrences
// Difficulty: Easy
// Link: https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

function uniqueOccurrences(arr: number[]): boolean {
  const valueCounts: Map<number, number> = new Map();

  for (const val of arr) {
    if (valueCounts.has(val)) {
      valueCounts.set(val, valueCounts.get(val)! + 1);
    } else {
      valueCounts.set(val, 1);
    }
  }

  const uniqueCounts = new Set([...valueCounts.values()]);

  return valueCounts.size == uniqueCounts.size;
}

// Test cases
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Expected: true
console.log(uniqueOccurrences([1, 2])); // Expected: false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // Expected: true
