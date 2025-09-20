// Problem: Design Twitter
// Difficulty: Medium
// Link: https://leetcode.com/problems/design-twitter/description/

interface Tweet {
  userId: number;
  tweetId: number;
}

class Twitter {
  private tweets: Tweet[];
  private followTable: Map<number, Set<number>>;

  constructor() {
    this.tweets = new Array();
    this.followTable = new Map();
  }

  postTweet(userId: number, tweetId: number): void {
    this.tweets.unshift({
      userId,
      tweetId,
    });
  }

  _getFollowing(userId: number): Set<number> {
    if (!this.followTable.has(userId)) {
      const newSet = new Set<number>([userId]);
      this.followTable.set(userId, newSet);
      return newSet;
    }

    return this.followTable.get(userId)!;
  }

  getNewsFeed(userId: number): number[] {
    const result = [];
    const following = this._getFollowing(userId);

    for (let i = 0; i < this.tweets.length; i++) {
      const tweet = this.tweets[i]!;
      if (following.has(tweet.userId)) {
        result.push(tweet.tweetId);
        if (result.length >= 10) {
          return result;
        }
      }
    }

    return result;
  }

  follow(followerId: number, followeeId: number): void {
    const following = this._getFollowing(followerId);
    following.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    const following = this._getFollowing(followerId);
    following.delete(followeeId);
  }
}

// Test cases
const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // Expected: [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // Expected: [6, 5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // Expected: [5]
