// Problem: Merge Strings Alternately
// Difficulty: Easy
// Link: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

function _mergeAlternately(word1: string, word2: string): string {
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

function mergeAlternately(word1: string, word2: string): string {
  let first = 0,
    second = 0;
  let result = "";

  while (first < word1.length || second < word2.length) {
    if (first < word1.length) {
      result += word1[first];
      first++;
    }

    if (second < word2.length) {
      result += word2[second];
      second++;
    }
  }

  return result;
}

// Test cases
console.log(mergeAlternately("abc", "pqr")); // Expected: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Expected: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Expected: "apbqcd"
