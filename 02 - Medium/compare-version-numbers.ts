// Problem: Compare Version Numberrs
// Difficulty: Medium
// Link: https://leetcode.com/problems/compare-version-numbers/?envType=daily-question&envId=2025-09-23

function compareVersion(version1: string, version2: string): number {
  let result = 0;
  const split1 = version1.split(".");
  const split2 = version2.split(".");
  const n = Math.max(split1.length, split2.length);

  function _getValue(split: string[], index: number) {
    if (index < split.length) {
      return parseInt(split[index]!);
    }

    return 0;
  }

  for (let i = 0; i < n; i++) {
    const value1 = _getValue(split1, i);
    const value2 = _getValue(split2, i);

    if (value1 > value2) {
      return 1;
    } else if (value1 < value2) {
      return -1;
    }
  }

  return result;
}

// Test cases
console.log(compareVersion("1.2", "1.10")); // Expected: -1 (1st is less than 2nd)
console.log(compareVersion("1.01", "1.001")); // Expected: 0 (Arguments are equivalent)
console.log(compareVersion("1.0", "1.0.0.0")); // Expected: 0 (Arguments are equivalent)
