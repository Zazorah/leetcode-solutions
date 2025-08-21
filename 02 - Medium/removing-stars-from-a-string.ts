// Problem: Removing Stars From a String
// Difficulty: Medium
// Link: https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75

// First Attempt - Time-Limit Exceeded
function _removeStars(s: string): string {
  let resultArr: string[] = [];

  let starQueue = 0;
  for (const char of [...s].toReversed()) {
    if (char === "*") {
      starQueue++;
    } else {
      if (starQueue > 0) {
        starQueue--;
      } else {
        resultArr = [char, ...resultArr];
      }
    }
  }

  return resultArr.join("");
}

// Attempt with a Proper Stack
function removeStars(s: string): string {
  let result = "";
  const stack = [...s];
  let starCount = 0;
  while (stack.length > 0) {
    const value = stack.pop();
    if (value == "*") {
      starCount++;
    } else {
      if (starCount > 0) {
        starCount--;
      } else {
        result = value + result;
      }
    }
  }

  return result;
}

// Test cases
console.log(removeStars(`leet**cod*e`)); // Expected: "lecoe"
console.log(removeStars(`erase*****`)); // Expected: ""
