// Problem: Convert Integer to Sum of Two No-Zero Integers
// Difficulty: Easy
// Link: https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers

function getNoZeroIntegers(n: number): number[] {
  function _isNoZero(n: number): Boolean {
    return !`${n}`.includes("0");
  }

  let result: [number, number] = [0, 0];

  for (let i = 0; i < n; i++) {
    let j = n - i;
    if (_isNoZero(i) && _isNoZero(j)) {
      result = [i, j];
      break;
    }
  }

  return result;
}

// Test cases
console.log(getNoZeroIntegers(2)); // Expected: [1, 1]
console.log(getNoZeroIntegers(11)); // Expected: [2, 9]
console.log(getNoZeroIntegers(10000)); // Expected: [1, 9999]
