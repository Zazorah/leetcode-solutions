// Problem: Design Ordered Stream
// Difficulty: Easy
// Link: https://leetcode.com/problems/design-an-ordered-stream/

class OrderedStream {
  private stream: string[];

  constructor(n: number) {
    this.stream = new Array(n);
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey - 1] = value;
    console.log(this.stream);

    let result: string[] = [];
    for (let i = idKey; i < this.stream.length; i++) {
      if (this.stream[i]) {
        result.push(this.stream[i]!);
      }
    }

    return result;
  }
}

// Test cases
const stream = new OrderedStream(5);
console.log(stream.insert(3, "ccccc")); // Expected: []
console.log(stream.insert(1, "aaaaa")); // Expected: ["aaaaa"]
console.log(stream.insert(2, "bbbbb")); // Expected: ["bbbbb", "ccccc"]
console.log(stream.insert(5, "eeeee")); // Expected: []
console.log(stream.insert(4, "ddddd")); // Expected: ["ddddd", "eeeee"]
