// Problem: Merge Strings Alternately
// Difficulty: Easy
// Link: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

function mergeAlternately(word1: string, word2: string): string {
  const result: string[] = [];
  const arr1: string[] = Array.from(word1);
  const arr2: string[] = Array.from(word2);

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length > 0) {
      result.push(arr1.shift() as string);
    }

    if (arr2.length > 0) {
      result.push(arr2.shift() as string);
    }
  }

  return result.join("");
}

// Test cases
console.log(mergeAlternately("abc", "pqr")); // Expected: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Expected: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Expected: "apbqcd"
