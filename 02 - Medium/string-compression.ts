// Problem: String Compression
// Difficulty: Medium
// Link: https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

function compress(chars: string[]): number {
  let write = 0,
    read = 0;

  while (read < chars.length) {
    const char = chars[read]!;
    let count = 0;

    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    chars[write++] = char;
    if (count > 1) {
      for (const digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  return write;
}

// Test cases
const arr1 = ["a", "a", "b", "b", "c", "c", "c"];
const arr2 = ["a"];
const arr3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];

console.log(compress(arr1)); // Expected: 6
console.log(compress(arr2)); // Expected: 1
console.log(compress(arr3)); // Expected: 4
