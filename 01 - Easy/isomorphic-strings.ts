// Problem: Isomorphic Strings
// Difficulty: Easy
// Link: https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150

function isIsomorphic(s: string, t: string): boolean {
  function _mapToString(s1: string, s2: string) {
    const charMap: Map<string, string> = new Map();
    for (let i = 0; i < s1.length; i++) {
      let char1 = s1[i]!;
      let char2 = s2[i]!;

      if (!charMap.has(char1)) {
        charMap.set(char1, char2);
      } else {
        if (char2 != charMap.get(char1)) {
          return false;
        }
      }
    }

    return true;
  }

  return _mapToString(s, t) && _mapToString(t, s);
}

// Test cases
console.log(isIsomorphic("egg", "add")); // Expected: true
console.log(isIsomorphic("foo", "bar")); // Expected: false
console.log(isIsomorphic("paper", "title")); // Expected: true
