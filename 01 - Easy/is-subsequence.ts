// Problem: Is Subsequence
// Difficulty: Easy
// Link: https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

function isSubsequence(s: string, t: string): boolean {
  function findNext(sIndex: number, tIndex: number) {
    if (sIndex == s.length) {
      return true;
    }

    for (let i = tIndex; i < t.length; i++) {
      if (s[sIndex] === t[i]) {
        return findNext(sIndex + 1, i + 1);
      }
    }

    return false;
  }

  return findNext(0, 0);
}

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // Expected: true
console.log(isSubsequence("axc", "ahbgdc")); // Expected: false
