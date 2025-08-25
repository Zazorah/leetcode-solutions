// Problem: Combination Sum III
// Difficulty: Medium
// Link: https://leetcode.com/problems/combination-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];

  function _step(
    start: number = 1,
    digits: number[] = [],
    runningSum: number = 0
  ) {
    if (digits.length === k) {
      if (runningSum === n) {
        result.push([...digits]);
      }
      return;
    }

    if (digits.length > k || runningSum > n) {
      return;
    }

    for (let i = start; i <= 9; i++) {
      digits.push(i);
      _step(i + 1, digits, runningSum + i);
      digits.pop();
    }
  }

  _step();
  return result;
}

// Test cases
console.log(combinationSum3(3, 7)); // Expected: [[1, 2, 4]]
console.log(combinationSum3(3, 9)); // Expected: [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // Expected: []
