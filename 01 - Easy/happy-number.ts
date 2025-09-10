// Problem: Happy Number
// Difficulty: Easy
// Link: https://leetcode.com/problems/happy-number/?envType=study-plan-v2&envId=top-interview-150

function isHappy(n: number): boolean {
  const history = new Set();
  function _step(n: number): boolean {
    if (n == 1) {
      return true;
    }

    if (history.has(n)) {
      return false;
    }

    history.add(n);

    n = _process(n);

    return _step(n);
  }

  function _process(n: number): number {
    let sum = 0;
    for (const num of `${n}`) {
      const digit = parseInt(num);
      sum += digit * digit;
    }

    return sum;
  }

  return _step(n);
}

// Test cases
console.log(isHappy(19)); // Expected: true
console.log(isHappy(2)); // Expected: false
