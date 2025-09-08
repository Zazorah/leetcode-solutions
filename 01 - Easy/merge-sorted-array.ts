// Problem: Merge Sorted Array
// Difficulty: Easy
// Link: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let temp: number[] = [];
  temp.push(...nums1.slice(0, m));
  temp.push(...nums2.slice(0, n));
  temp.sort((a, b) => a - b);

  for (let i = 0; i < m + n; i++) {
    nums1[i]! = temp[i]!;
  }
}

// Test cases
const nums1a = [1, 2, 3, 0, 0, 0];
const nums2a = [2, 5, 6];

merge(nums1a, 3, nums2a, 3);
console.log(nums1a); // Expected: [1, 2, 2, 3, 5, 6]

const nums1b = [1];
const nums2b: number[] = [];

merge(nums1b, 1, nums2b, 0);
console.log(nums1b); // Expected: [1];

const nums1c = [0];
const nums2c = [1];

merge(nums1c, 0, nums2c, 1);
console.log(nums1c); // Expected: [1];

const nums1d = [
  -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5, -5,
  -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5,
  6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const nums2d = [
  -10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7, -7,
  -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2, -2,
  -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,
  2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7,
  7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
];

merge(nums1d, 55, nums2d, 99);
console.log(nums1d);
