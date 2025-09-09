// Problem: Valid Palindrome
// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

function isPalindrome(s: string): boolean {
  // Convert string to just lowercase alphanumerics
  let cleanString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] != cleanString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true
