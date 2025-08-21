// Problem: Equal Row and Column Pairs
// Difficulty: Medium
// Link: https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75

function equalPairs(grid: number[][]): number {
  const n = grid.length;

  function areEqual(rowIndex: number, colIndex: number) {
    for (let i = 0; i < n; i++) {
      if (grid[colIndex]![i]! != grid[i]![rowIndex]!) {
        return false;
      }
    }

    return true;
  }

  let result = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (areEqual(x, y)) {
        result++;
      }
    }
  }

  return result;
}

// Test cases
console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
); // Expected: 1

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
); // Expected: 3

console.log(
  equalPairs([
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 17],
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 18],
  ])
); // Expected: 16
