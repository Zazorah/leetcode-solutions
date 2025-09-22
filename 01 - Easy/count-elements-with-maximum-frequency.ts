// Problem: Count Elements with Maximum Frequency
// Difficulty: Easy
// Link: https://leetcode.com/problems/count-elements-with-maximum-frequency/description/?envType=daily-question&envId=2025-09-22

function maxFrequencyElements(nums: number[]): number {
  const counter: Map<number, number> = new Map();
  let maxFrequency = 0;

  for (let i = 0; i < nums.length; i++) {
    if (counter.has(nums[i]!)) {
      counter.set(nums[i]!, counter.get(nums[i]!)! + 1);
      maxFrequency = Math.max(maxFrequency, counter.get(nums[i]!)!);
    } else {
      counter.set(nums[i]!, 1);
      maxFrequency = Math.max(maxFrequency, 1);
    }
  }

  let count = 0;
  for (const val of counter.values()) {
    if (val == maxFrequency) {
      count += 1;
    }
  }

  return maxFrequency * count;
}

// Test cases
console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // Expected: 4
console.log(maxFrequencyElements([1, 2, 3, 4, 5])); // Expected: 5
