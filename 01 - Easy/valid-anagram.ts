// Problem: Valid Anagram
// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150

function isAnagram(s: string, t: string): boolean {
  function _createCounter(str: string): Map<string, number> {
    const result: Map<string, number> = new Map();
    for (const char of str) {
      if (result.has(char)) {
        result.set(char, result.get(char)! + 1);
        continue;
      }

      result.set(char, 1);
    }

    return result;
  }

  const sCounter = _createCounter(s);
  const tCounter = _createCounter(t);

  for (const key of sCounter.keys()) {
    if (sCounter.get(key) != tCounter.get(key)) {
      return false;
    }
  }

  for (const key of tCounter.keys()) {
    if (tCounter.get(key) != sCounter.get(key)) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
