// Problem: Two Sum
// Difficulty: Easy
// Link: https://leetcode.com/problems/two-sum/description/
function twoSum(nums: number[], target: number): number[] {
  var values = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i] as number;
    if (values.has(currentValue)) {
      return [values.get(currentValue)!, i];
    }

    values.set(target - currentValue, i);
  }

  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
