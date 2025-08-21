// Problem: Determine if Two Strings are Close
// Difficulty: Medium
// Link: https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75

// Op 1 - If the occurrence count of each set is equal
// Op 2 - If the length of set is equal

function closeStrings(word1: string, word2: string): boolean {
  const charCount1: Map<string, number> = new Map();
  const charCount2: Map<string, number> = new Map();

  for (const char of word1) {
    if (!charCount1.has(char)) {
      charCount1.set(char, 1);
    } else {
      charCount1.set(char, charCount1.get(char)! + 1);
    }
  }

  for (const char of word2) {
    if (!charCount2.has(char)) {
      charCount2.set(char, 1);
    } else {
      charCount2.set(char, charCount2.get(char)! + 1);
    }
  }

  const chars1 = [...charCount1.keys()].toSorted();
  const chars2 = [...charCount2.keys()].toSorted();

  if (chars1.length != chars2.length) return false;

  for (let i = 0; i < chars1.length; i++) {
    if (chars1[i] !== chars2[i]) {
      console.log("Mismatched Sets.");
      return false;
    }
  }

  const counts1 = [...charCount1.values()].toSorted();
  const counts2 = [...charCount2.values()].toSorted();

  for (let i = 0; i < counts1.length; i++) {
    if (counts1[i] != counts2[i]) {
      console.log("Mismatched counts.");
      return false;
    }
  }

  return true;
}

// Test cases
console.log(closeStrings("abc", "bca")); // Expected: true
console.log(closeStrings("a", "aa")); // Expected: false
console.log(closeStrings("cabbba", "abbccc")); // Expected: true
