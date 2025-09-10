// Problem: Word Pattern
// Difficulty: Easy
// Link: https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

function wordPattern(pattern: string, s: string): boolean {
  const ssplit = s.split(" ");

  // Edge-case: Lengths must be equal.
  if (pattern.length != ssplit.length) return false;

  const charToWord: Map<string, string> = new Map();
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i]!;
    let word = ssplit[i]!;

    if (!charToWord.has(char)) {
      if (Array.from(charToWord.values()).includes(word)) {
        return false;
      }

      charToWord.set(char, word);
    } else {
      if (word != charToWord.get(char)) {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Expected: true
console.log(wordPattern("abba", "dog cat cat fish")); // Expected: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Expected: false
