// Problem: Maximum Area of Longest Diagonal Rectangle
// Difficulty: Easy
// Link: https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/description/?envType=daily-question&envId=2025-08-26

function areaOfMaxDiagonal(dimensions: number[][]): number {
  let longestDiagonal = 0,
    result = 0;

  function _getDiagonal(rectangle: [number, number]) {
    const value = Math.sqrt(
      rectangle[0] * rectangle[0] + rectangle[1] * rectangle[1]
    );
    return value;
  }

  function _getArea(rectangle: [number, number]) {
    const area = rectangle[0] * rectangle[1];
    return area;
  }

  for (const rectangle of dimensions) {
    const diagonal = _getDiagonal(rectangle as [number, number]);
    if (diagonal > longestDiagonal) {
      result = _getArea(rectangle as [number, number]);
      longestDiagonal = diagonal;
    } else if (diagonal == longestDiagonal) {
      result = Math.max(_getArea(rectangle as [number, number]), result);
    }
  }

  return result;
}

// Test cases
console.log(
  areaOfMaxDiagonal([
    [9, 3],
    [8, 6],
  ])
); // Expected: 48

console.log(
  areaOfMaxDiagonal([
    [3, 4],
    [4, 3],
  ])
); // Expected: 12

console.log(
  areaOfMaxDiagonal([
    [6, 5],
    [8, 6],
    [2, 10],
    [8, 1],
    [9, 2],
    [3, 5],
    [3, 5],
  ])
); // Expected: 20
