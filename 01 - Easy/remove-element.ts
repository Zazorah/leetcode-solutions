// Problem: Remove Element
// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i]!;
      k++;
    }
  }

  return k;
}

// Test cases
const arr1 = [3, 2, 2, 3];
console.log(removeElement(arr1, 3), arr1); // Expected: 2, [2, 2, _, _]
const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr2, 2), arr2); // Expected: 5, [0, 1, 4, 0, 3, _, _, _]
