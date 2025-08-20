// Problem: Move Zeroes
// Difficulty: Easy
// Link: https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75

function moveZeroes(nums: number[]): void {
  let read = 0,
    place = 0;

  while (place < nums.length) {
    if (read < nums.length) {
      if (nums[read] != 0) {
        nums[place] = nums[read]!;
        place++;
      }

      read++;
    } else {
      nums[place] = 0;
      place++;
    }
  }
}

// Test cases
const arr1 = [0, 1, 0, 3, 12];
const arr2 = [0];

moveZeroes(arr1);
console.log(arr1); // Expected: [1, 3, 12, 0, 0]

moveZeroes(arr2);
console.log(arr2); // Expected: [0]
