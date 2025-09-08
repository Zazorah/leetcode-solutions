// Problem: Remove Duplicates from Sorted Array II
// Difficulty: Medium
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
  const valCounts: Map<number, number> = new Map();
  let k = 0;

  function _getCount(num: number) {
    if (valCounts.has(num)) {
      return valCounts.get(num)!;
    }

    return 0;
  }

  function _countNum(num: number) {
    if (valCounts.has(num)) {
      valCounts.set(num, valCounts.get(num)! + 1);
      return;
    }

    valCounts.set(num, 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (_getCount(nums[i]!) < 2) {
      nums[k] = nums[i]!;
      k++;

      _countNum(nums[i]!);
    }
  }

  return k;
}

// Test cases
const nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums1), nums1); // Expected: 5, [1, 1, 2, 2, 3, _]
const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums2), nums2); // Expected: 7, [0, 0, 1, 1, 2, 3, 3, _, _]
