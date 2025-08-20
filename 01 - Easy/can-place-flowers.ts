// Problem: Can Place Flowers
// Difficulty: Easy
// Link: https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let canPlace = true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      let nextFree = i + 1 < flowerbed.length ? flowerbed[i + 1] == 0 : true;
      if (canPlace && nextFree) {
        n--;
        canPlace = false;
      } else {
        canPlace = true;
      }
    } else {
      canPlace = false;
    }
  }

  return n <= 0;
}

// Test cases
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Expected: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Expected: false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // Expected: false
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // Expected: true
