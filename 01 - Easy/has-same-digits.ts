// Problem: Has Same Digits
// Difficulty: Easy
// Link: https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/description/?envType=daily-question&envId=2025-10-23

function hasSameDigits(s: string): boolean {
  while (s.length > 2) {
    let new_s = "";
    for (let i = 0; i < s.length - 1; i++) {
      const num_a = parseInt(s[i]!);
      const num_b = parseInt(s[i + 1]!);

      new_s += `${(num_a + num_b) % 10}`;
    }

    s = new_s;
  }

  return s[0] == s[1];
}

// Test cases
console.log(hasSameDigits("3902")); // Expected: true
console.log(hasSameDigits("34789")); // Expected: false
