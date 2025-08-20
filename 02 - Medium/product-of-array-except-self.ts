// Problem: Product of Array Except Self
// Difficulty: Medium
// Link: https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);

  for (let i = 0; i < nums.length; i++) {
    result[i] = i > 0 ? nums[i - 1]! * result[i - 1] : 1;
  }

  let suffixProduct = 1;
  for (let i = result.length - 1; i >= 0; i--) {
    result[i] *= suffixProduct;
    suffixProduct *= nums[i]!;
  }

  return result;
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0,0,9,0,0]
