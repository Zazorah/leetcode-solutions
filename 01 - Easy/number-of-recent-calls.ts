// Problem: Number of Recent Calls
// Difficulty: Easy
// Link: https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

class RecentCounter {
  private recentRequests: number[] = [];

  constructor() {
    this.recentRequests = [];
  }

  ping(t: number): number {
    while (
      this.recentRequests.length > 0 &&
      Math.abs(t - this.recentRequests[0]!) > 3000
    ) {
      this.recentRequests.shift();
    }

    this.recentRequests.push(t);
    return this.recentRequests.length;
  }
}

// Test cases
const counter = new RecentCounter();
console.log(counter.ping(1)); // Expected: 1
console.log(counter.ping(100)); // Expected: 2
console.log(counter.ping(3001)); // Expected: 3
console.log(counter.ping(3002)); // Expected: 3
