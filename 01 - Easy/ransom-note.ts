// Problem: Ransom Note
// Difficulty: Easy
// Link: https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

function canConstruct(ransomNote: string, magazine: string): boolean {
  // Assemble Map
  const letterMap: Map<string, number> = new Map();
  for (const letter of magazine) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter)! + 1);
      continue;
    }

    letterMap.set(letter, 1);
  }

  // Check if there's enough for each letter.
  for (const letter of ransomNote) {
    if (letterMap.has(letter) && letterMap.get(letter)! > 0) {
      letterMap.set(letter, letterMap.get(letter)! - 1);
      continue;
    }

    return false;
  }

  return true;
}

// Test cases
console.log(canConstruct("a", "b")); // Expected: false
console.log(canConstruct("aa", "ab")); // Expected: false
console.log(canConstruct("aa", "aab")); // Expected: true
