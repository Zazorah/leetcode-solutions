// Problem: Valid Sudoku
// Difficulty: Medium
// Link: https://leetcode.com/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150

function isValidSudoku(board: string[][]): boolean {
  function _validateLine(y: number) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
      const val = board[y]![i];
      if (val != ".") {
        if (set.has(val)) {
          console.log("Error ");
          return false;
        }

        set.add(val);
      }
    }

    return true;
  }

  function _validateColumn(x: number) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
      const val = board[i]![x];
      if (val != ".") {
        if (set.has(val)) {
          return false;
        }

        set.add(val);
      }
    }

    return true;
  }

  function _validateSquare(x: number, y: number) {
    let set = new Set();
    let startX = x * 3;
    let startY = y * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const val = board[startY + i]![startX + j];

        if (val != ".") {
          if (set.has(val)) {
            return false;
          }
        }

        set.add(val);
      }
    }

    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (!_validateLine(i) || !_validateColumn(i)) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!_validateSquare(i, j)) {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // Expected: true

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // Expected: false
