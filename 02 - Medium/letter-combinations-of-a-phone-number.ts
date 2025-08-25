// Problem: Letter Combinations of a Phone Number
// Difficulty: Medium
// Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=leetcode-75

function letterCombinations(digits: string): string[] {
  const buttonMap: Map<string, string[]> = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  const result: string[] = [];
  function _step(digits: string[], combo: string = "") {
    if (digits.length == 0) {
      if (combo != "") {
        result.push(combo);
      }
      return;
    }

    const nextDigit = digits.shift();
    const letterList = buttonMap.get(nextDigit!);

    for (const value of letterList!) {
      _step([...digits], combo + value);
    }
  }

  _step(digits.split(""));

  return result;
}

// Test cases
console.log(letterCombinations("23")); // Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // Expected: []
console.log(letterCombinations("2")); // Expected: ["a", "b", "c"]
