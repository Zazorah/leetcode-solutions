// Problem: Make Array Elements Equal to Zero
// Difficulty: Easy
// Link: https://leetcode.com/problems/make-array-elements-equal-to-zero/?envType=daily-question&envId=2025-10-28

function countValidSelections(nums: number[]): number {
  function _simulate(index: number, starting_direction: number = 1) {
    let curr = index;
    let direction = starting_direction;
    let temp = [...nums];

    while (curr >= 0 && curr < temp.length) {
      if (temp[curr] != 0) {
        temp[curr]! -= 1;
        direction *= -1;
      }

      curr += direction;
    }

    return new Set(temp).size == 1;
  }

  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      if (_simulate(i, 1)) {
        total += 1;
      }

      if (_simulate(i, -1)) {
        total += 1;
      }
    }
  }

  return total;
}

// Test cases
console.log(countValidSelections([1, 0, 2, 0, 3])); // Expected: 2
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0])); // Expected: 0
