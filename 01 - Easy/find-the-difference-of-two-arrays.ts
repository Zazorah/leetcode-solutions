// Problem: Find the Difference of Two Arrays
// Difficulty: Easy
// Link: https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: number[][] = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Find missing from nums1
  for (const val of set1) {
    if (!set2.has(val)) {
      result[0]!.push(val);
    }
  }

  // Find missing from nums2
  for (const val of set2) {
    if (!set1.has(val)) {
      result[1]!.push(val);
    }
  }

  return result;
}

// Test cases
console.log(findDifference([1, 2, 3], [2, 4, 6])); // Expected: [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // Expected: [[3],[]]
