// Problem: Greatest Common Divisor of Strings
// Difficulty: Easy
// Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

function gcdOfStrings(str1: string, str2: string): string {
  let len1 = str1.length,
    len2 = str2.length;

  function isGCD(index: number) {
    if (len1 % index || len2 % index) {
      return false;
    }

    let n1 = Math.floor(len1 / index),
      n2 = Math.floor(len2 / index);

    let base = str1.slice(0, index);
    return str1 == base.repeat(n1) && str2 == base.repeat(n2);
  }

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isGCD(i)) {
      return str1.slice(0, i);
    }
  }

  return "";
}

// Test cases
console.log(gcdOfStrings("ABCABC", "ABC")); // Expected: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Expected: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Expected: ""
