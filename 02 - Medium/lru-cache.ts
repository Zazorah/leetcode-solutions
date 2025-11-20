// Problem: LRU Cache
// Difficulty: Medium
// Link: https://leetcode.com/problems/lru-cache/description/?envType=problem-list-v2&envId=ssd-ssd1-cache-system-design

class ListNode {
  key: number;
  value: number;
  prev: ListNode | null = null;
  next: ListNode | null = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, ListNode> = new Map();
  private head: ListNode | null = null;
  private tail: ListNode | null = null;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number) {
    const node = this.cache.get(key);
    if (!node) return -1;

    this.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const existingNode = this.cache.get(key);

    if (existingNode) {
      existingNode.value = value;
      this.moveToHead(existingNode);
    } else {
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);

      if (this.cache.size > this.capacity) {
        this.removeTail();
      }
    }
  }

  private moveToHead(node: ListNode): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  private addToHead(node: ListNode): void {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  private removeNode(node: ListNode): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  private removeTail(): void {
    if (!this.tail) return;

    const tailNode = this.tail;
    this.cache.delete(tailNode.key);
    this.removeNode(tailNode);
  }
}

// Test cases
const cache = new LRUCache(2);
console.log(cache.get(2)); // Expected: -1
cache.put(2, 6);
console.log(cache.get(1)); // Expected: -1
cache.put(1, 5);
cache.put(1, 2);
console.log(cache.get(1)); // Expected: 2
console.log(cache.get(2)); // Expected: 6
