// Problem: Minimum Score Triangulation of Polygon
// Difficulty: Medium
// Link: https://leetcode.com/problems/minimum-score-triangulation-of-polygon/?envType=daily-question&envId=2025-09-29

// This one is really difficult for me to wrap my head around, so I'm going to work off of the editorial.

function minScoreTriangulation(values: number[]): number {
  const n = values.length;
  const memo = new Map();

  const dp = (i: number, j: number) => {
    if (i + 2 > j) {
      return 0;
    }

    if (i + 2 === j) {
      return values[i]! * values[i + 1]! * values[j]!;
    }

    const key = i * n + j;
    if (!memo.has(key)) {
      let minScore = Number.MAX_VALUE;
      for (let k = i + 1; k < j; k++) {
        minScore = Math.min(
          minScore,
          values[i]! * values[k]! * values[j]! + dp(i, k) + dp(k, j)
        );
      }
      memo.set(key, minScore);
    }
    return memo.get(key);
  };

  return dp(0, n - 1);
}

// Test cases
console.log(minScoreTriangulation([1, 2, 3])); // Expected: 6
console.log(minScoreTriangulation([3, 7, 4, 5])); // Expected: 144
console.log(minScoreTriangulation([1, 3, 1, 4, 1, 5])); // Expected: 13
