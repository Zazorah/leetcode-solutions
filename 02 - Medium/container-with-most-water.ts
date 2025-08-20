// Problem: Container With Most Water
// Difficulty: Medium
// Link: https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

// First Attempt - O(n^2)
function _maxArea(height: number[]): number {
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    const left = height[i]!;
    for (let j = i + 1; j < height.length; j++) {
      const right = height[j]!;
      result = Math.max(result, Math.min(height[i]!, height[j]!) * (j - i));
    }
  }

  return result;
}

// Second Attempt - Two Pointer
function maxArea(height: number[]): number {
  let result = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    const leftValue = height[left]!;
    const rightValue = height[right]!;

    result = Math.max(result, Math.min(leftValue, rightValue) * (right - left));

    if (leftValue > rightValue) {
      right--;
    } else {
      left++;
    }
  }

  return result;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49
console.log(maxArea([1, 2])); // Expected: 1
