// Problem: Contains Duplicate II
// Difficulty: Easy
// Link: https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= Math.min(n - 1, i + k); j++) {
      if (nums[i]! == nums[j]!) {
        return true;
      }
    }
  }

  return false;
}

// Test cases
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Expected: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Expected: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Expected: false
