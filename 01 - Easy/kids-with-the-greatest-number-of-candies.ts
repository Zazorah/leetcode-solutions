// Problem: Kids With the Greatest Number of Candies
// Difficulty: Easy
// Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const n = candies.length;
  const result = new Array(n);
  const maxCandies = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    result[i] = candies[i]! + extraCandies >= maxCandies ? true : false;
  }

  return result;
}

// Test cases
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // Expected: [true, true, true, false, true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // Expected: [true, false, false, false, false]
console.log(kidsWithCandies([12, 1, 12], 10)); // Expected: [true, false, true]
