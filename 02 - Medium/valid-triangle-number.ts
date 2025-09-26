// Problem: Valid Triangle Number
// Difficulty: Medium
// Link: https://leetcode.com/problems/valid-triangle-number/description/?envType=daily-question&envId=2025-09-26

function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let result = 0;

  for (let k = 2; k < nums.length; k++) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
      if (nums[left]! + nums[right]! > nums[k]!) {
        result += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

// Test cases
console.log(triangleNumber([2, 2, 3, 4])); // Expected: 3
console.log(triangleNumber([4, 2, 3, 4])); // Expected: 4
