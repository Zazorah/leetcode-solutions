// Problem: Asteroid Collision
// Difficulty: Medium
// Link: https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75

function asteroidCollision(asteroids: number[]): number[] {
  const resultStack: number[] = [];

  function _peek() {
    return resultStack[resultStack.length - 1]!;
  }

  for (const asteroid of asteroids) {
    if (resultStack.length == 0 || asteroid > 0) {
      resultStack.push(asteroid);
    } else {
      while (
        resultStack.length > 0 &&
        _peek() > 0 &&
        _peek() < Math.abs(asteroid)
      ) {
        resultStack.pop();
      }

      if (resultStack.length == 0 || _peek() < 0) {
        resultStack.push(asteroid);
      }

      if (_peek() == Math.abs(asteroid)) {
        resultStack.pop();
      }
    }
  }

  return resultStack;
}

// Test cases
console.log(asteroidCollision([5, 10, -5])); // Expected: [5, 10]
console.log(asteroidCollision([8, -8])); // Expected: []
console.log(asteroidCollision([10, 2, -5])); // Expected: [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // Expected: [-2, -1, 1, 2]
console.log(asteroidCollision([-2, -2, 1, -2])); // Expected: [-2, -2, -2]
console.log(asteroidCollision([-2, 2, -1, -2])); // Expected: [-2]
