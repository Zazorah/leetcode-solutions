// Problem: Reverse Vowels of a String
// Difficulty: Easy
// Link: https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  function parseVowels(s: string): string[] {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i]!)) {
        result += s[i];
      }
    }

    return Array.from(result);
  }

  const vowelsFromString = parseVowels(s);
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i]!)) {
      result += vowelsFromString.pop();
    } else {
      result += s[i];
    }
  }

  return result;
}

// Test cases
console.log(reverseVowels("IceCreAm")); // Expected: "AceCreIm"
console.log(reverseVowels("leetcode")); // Expected: "leotcede"
