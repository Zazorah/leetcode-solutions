// Problem: Diagonal Traverse
// Difficulty: Medium
// Link: https://leetcode.com/problems/diagonal-traverse/description/?envType=daily-question&envId=2025-08-25

function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0]!.length;
  const result: number[] = new Array(m * n);

  let stepDir = [1, -1];
  let readHead = [0, 0];

  function _getValue(x: number, y: number) {
    return mat[y]![x]!;
  }

  /**
   * Helper for getting the next value from the matrix and
   * advancing the head.
   */
  function _getNextValue() {
    const value = _getValue(readHead[0]!, readHead[1]!);
    _advanceReadHead();
    return value;
  }

  /**
   * Test next position and and rotate head if need-be.
   */
  function _advanceReadHead() {
    if (
      !_positionFree(readHead[0]! + stepDir[0]!, readHead[1]! + stepDir[1]!)
    ) {
      readHead = _rotateHead();
    } else {
      readHead = [readHead[0]! + stepDir[0]!, readHead[1]! + stepDir[1]!];
    }
  }

  // Check if a position in the matrix is free.
  function _positionFree(x: number, y: number) {
    if (x >= n || x < 0 || y >= m || y < 0) {
      return false;
    }

    return true;
  }

  /**
   * Helper for rotating the stepdirection and positioning
   * the head at the next bit.
   */
  function _rotateHead() {
    let newReadHead = [...readHead];

    // Change Direction
    switch (stepDir[0]) {
      case 1: // Moving Up-Right
        stepDir = [-1, 1];

        if (_positionFree(readHead[0]! + 1, readHead[1]!)) {
          newReadHead = [readHead[0]! + 1, readHead[1]!];
        } else if (_positionFree(readHead[0]!, readHead[1]! + 1)) {
          newReadHead = [readHead[0]!, readHead[1]! + 1];
        }

        break;

      case -1: // Moving Down-Left
        stepDir = [1, -1];

        if (_positionFree(readHead[0]!, readHead[1]! + 1)) {
          newReadHead = [readHead[0]!, readHead[1]! + 1];
        } else if (_positionFree(readHead[0]! + 1, readHead[1]!)) {
          newReadHead = [readHead[0]! + 1, readHead[1]!];
        }

        break;
    }

    return newReadHead;
  }

  // Main Loop
  let insertIndex = 0;
  while (insertIndex < result.length) {
    const value = _getNextValue();
    result[insertIndex] = value;
    insertIndex++;
  }

  return result;
}

// Test cases
console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Expected: [1,2,4,7,5,3,6,8,9]

console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
); // Expected: [1, 2, 3, 4]

console.log(
  findDiagonalOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // Expected: [1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12]
