// Problem: Triangle
// Difficulty: Medium
// Link: https://leetcode.com/problems/triangle/description/?envType=daily-question&envId=2025-09-25

function minimumTotal(triangle: number[][]): number {
  const resultTriangle: number[][] = [];
  const n = triangle.length;

  resultTriangle[0] = triangle[0]!;

  function _addToResult(row: number, col: number, val: number) {
    if (row >= resultTriangle.length) {
      const m = triangle[row]!.length;
      resultTriangle[row] = new Array(m).fill(Infinity);
    }

    resultTriangle[row]![col]! = Math.min(resultTriangle[row]![col]!, val);
  }

  function _getResult() {
    if (resultTriangle.length < 1) {
      return Math.min(...triangle[0]!);
    }

    const lastRow = resultTriangle[resultTriangle.length - 1]!;
    return Math.min(...lastRow);
  }

  for (let i = 0; i < n - 1; i++) {
    const m = triangle[i]!.length;
    for (let j = 0; j < m; j++) {
      const topVal = resultTriangle[i]![j]!;
      const leftVal = triangle[i + 1]![j]!;
      const rightVal = triangle[i + 1]![j + 1]!;

      _addToResult(i + 1, j, topVal + leftVal);
      _addToResult(i + 1, j + 1, topVal + rightVal);
    }
  }

  return _getResult();
}

// Test cases
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // Expected: 11
console.log(minimumTotal([[-10]]));
