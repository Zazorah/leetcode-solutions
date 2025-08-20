// Problem: Reverse Words in a String
// Difficulty: Medium
// Link: https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

function reverseWords(s: string): string {
  const words = [];
  const splits = s.split(" ").map((w) => w.trim());
  for (const word of splits) {
    if (word.length > 0) {
      words.push(word);
    }
  }

  words.reverse();
  return words.join(" ");
}

// Test cases
console.log(reverseWords("the sky is blue")); // Expected: "blue is sky the"
console.log(reverseWords("a good   example")); // Expected: "example good a"
