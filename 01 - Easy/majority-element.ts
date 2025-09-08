// Problem: Majority Element
// Difficulty: Easy
// Link: https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// Tackling this with an O(1) space complexity solution.
function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Test cases
console.log(majorityElement([3, 2, 3])); // Expected: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expeccted: 2
