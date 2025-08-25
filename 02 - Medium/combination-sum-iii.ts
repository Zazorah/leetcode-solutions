// Problem: Combination Sum III
// Difficulty: Medium
// Link: https://leetcode.com/problems/combination-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];

  function _step(
    values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    digits: number[] = [],
    runningSum: number = 0
  ) {
    if (runningSum === n && digits.length == k) {
      result.push(digits);
      return;
    }

    while (values.length > 0) {
      const value = values.shift()!;
      if (runningSum + value <= n) {
        _step([...values], [...digits, value], runningSum + value);
      }
    }
  }

  _step();
  return result;
}

// Test cases
console.log(combinationSum3(3, 7)); // Expected: [[1, 2, 4]]
console.log(combinationSum3(3, 9)); // Expected: [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // Expected: []
