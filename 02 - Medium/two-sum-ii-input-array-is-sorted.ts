// Problem: Two Sum II - Input Array is Sorted
// Difficulty: Medium
// Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan-v2&envId=top-interview-150

// Passed but waaay slow.
function _twoSum(numbers: number[], target: number): number[] {
  let result: [number, number] | null = null;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j]! + numbers[i]! > target) {
        break;
      }

      if (numbers[j]! + numbers[i]! == target) {
        result = [i + 1, j + 1];
        break;
      }
    }

    if (result) {
      break;
    }
  }

  return result!;
}

// Two-Pointer Approach
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left]! + numbers[right]!;

    if (sum === target) return [left + 1, right + 1];

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [1, 2]
console.log(twoSum([2, 3, 4], 6)); // Expected: [1, 3]
console.log(twoSum([-1, 0], -1)); // Expected: [1, 2]
console.log(twoSum([0, 0, 3, 4], 0)); // Expected: [1, 2]
