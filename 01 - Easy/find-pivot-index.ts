// Problem: Find Pivot Index
// Difficulty: Easy
// Link: https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75

function pivotIndex(nums: number[]): number {
  const n = nums.length;
  const sumLeft = new Array(n),
    sumRight = new Array(n);

  let left = 0,
    right = n - 1;
  let runningSumLeft = 0,
    runningSumRight = 0;

  while (left <= n || right >= 0) {
    sumLeft[left] = runningSumLeft;
    sumRight[right] = runningSumRight;

    runningSumLeft += nums[left]!;
    runningSumRight += nums[right]!;

    left++;
    right--;
  }

  for (let i = 0; i < n; i++) {
    if (sumLeft[i] == sumRight[i]) {
      return i;
    }
  }

  return -1;
}

// Test cases
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Expected: 3
console.log(pivotIndex([1, 2, 3])); // Expected: -1
console.log(pivotIndex([2, 1, -1])); // Expected: 0
