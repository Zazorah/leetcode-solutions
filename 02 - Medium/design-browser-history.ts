// Problem: Design Browser History
// Difficulty: Medium
// Link: https://leetcode.com/problems/design-browser-history/description/

class BrowserHistory {
  private history: string[];
  private historyHead: number;

  constructor(homepage: string) {
    this.history = [];
    this.historyHead = -1;

    this.visit(homepage);
  }

  _clearForwardHistory(index: number) {
    this.history = this.history.slice(0, index + 1);
  }

  visit(url: string): void {
    this._clearForwardHistory(this.historyHead);

    this.history.push(url);
    this.historyHead += 1;
  }

  back(steps: number): string {
    this.historyHead = Math.max(0, this.historyHead - steps);
    return this.history[this.historyHead]!;
  }

  forward(steps: number): string {
    this.historyHead = Math.min(
      this.historyHead + steps,
      this.history.length - 1
    );

    return this.history[this.historyHead]!;
  }
}

// Test cases
const browser = new BrowserHistory("leetcode.com");
browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");

console.log(browser.back(1)); // Expected: facebook.com
console.log(browser.back(1)); // Expected: google.com

browser.visit("linkedin.com");

console.log(browser.forward(1)); // Expected: facebook.com

// browser.visit("linkedin.com");
// console.log(browser.forward(2)); // Expected: linkedin.com
// console.log(browser.back(2)); // Expected: google.com
// console.log(browser.back(7)); // Expected: leetcode.com
