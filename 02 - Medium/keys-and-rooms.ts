// Problem: Keys and Rooms
// Difficulty: Medium
// Link: https://leetcode.com/problems/keys-and-rooms/description/?envType=study-plan-v2&envId=leetcode-75

function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>();

  function _dfs(room: number): void {
    if (visited.has(room)) return;

    visited.add(room);

    for (const key of rooms[room]!) {
      _dfs(key);
    }
  }

  _dfs(0);
  return visited.size === rooms.length;
}

// Test cases
console.log(canVisitAllRooms([[1], [2], [3], []])); // Expected: true
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // Expected: true
