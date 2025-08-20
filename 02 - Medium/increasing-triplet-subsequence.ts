// Problem: Increasing Triplet Subsequencer
// Difficulty: Medium
// Link: https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity,
    second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! <= first) {
      first = nums[i]!;
    } else if (nums[i]! <= second) {
      second = nums[i]!;
    } else {
      return true;
    }
  }

  return false;
}

// Test cases
console.log(increasingTriplet([1, 2, 3, 4, 5])); // Expected: true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // Expected: false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // Expected: true
