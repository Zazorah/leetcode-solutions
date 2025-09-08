// Problem: Remove Duplicates From A Sorted Array
// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// Set solution. Doesn't consider the fact that it's already sorted.
function _removeDuplicates(nums: number[]): number {
  const vals: Set<number> = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!vals.has(nums[i]!)) {
      vals.add(nums[i]!);
      nums[vals.size - 1] = nums[i]!;
    }
  }

  return vals.size;
}

// Much faster solution. Takes advantage of the array being pre-sorted.
function removeDuplicates(nums: number[]): number {
  let k = 0;
  let last = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > last) {
      nums[k] = nums[i]!;
      k++;
      last = nums[i]!;
    }
  }

  return k;
}

// Test cases
const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1); // Expected: 2, [1, 2, _]
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2); // Expected: 5, [0, 1, 2, 3, 4, _, _, _, _]
