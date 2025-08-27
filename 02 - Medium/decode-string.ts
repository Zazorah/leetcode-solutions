// Problem: Decode String
// Difficulty: Medium
// Link: https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75

function decodeString(s: string): string {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function _step(readStack: string[], repeatCount: number = 1) {
    let nextStack = [];
    let currStr = "";
    let bracketCount = 0;
    let num = "";

    while (readStack.length > 0) {
      const char = readStack.shift()!;
      if (char === "[") {
        // Detect beginning of chunk.
        if (bracketCount > 0) {
          nextStack.push(char);
        }
        bracketCount++;
      } else if (char === "]") {
        // Detect end of chunk.
        bracketCount--;
        if (bracketCount <= 0) {
          currStr += _step(nextStack, parseInt(num));
          num = "";
          nextStack = [];
        } else {
          nextStack.push(char);
        }
      } else if (digits.includes(char)) {
        // Detect number.
        if (bracketCount > 0) {
          nextStack.push(char);
        } else {
          num += char;
        }
      } else {
        // Detect regular character.
        if (bracketCount <= 0) {
          currStr += char;
        } else {
          nextStack.push(char);
        }
      }
    }

    return currStr.repeat(repeatCount);
  }

  return _step(s.split(""));
}

// Test cases
console.log(decodeString("3[a]2[bc]")); // Expected: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Expected: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Expected: "aaabcbc"
