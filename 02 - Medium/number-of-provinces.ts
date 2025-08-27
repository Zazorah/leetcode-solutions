// Problem: Number of Provinces
// Difficulty: Medium
// Link: https://leetcode.com/problems/number-of-provinces/description/?envType=study-plan-v2&envId=leetcode-75

function findCircleNum(isConnected: number[][]): number {
  const visited: Set<number> = new Set();
  let provinces = 0;

  function _dfs(nodeIndex: number) {
    if (visited.has(nodeIndex)) {
      return;
    }

    visited.add(nodeIndex);

    const nodePaths = isConnected[nodeIndex]!;
    for (let i = 0; i < nodePaths.length; i++) {
      if (i != nodeIndex && nodePaths[i] === 1) {
        _dfs(i);
      }
    }
  }

  // For each node, begin a DFS search if it's not in visited.
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      _dfs(i);
      provinces++;
    }
  }

  return provinces;
}

// Test cases
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // Expected: 2

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // Expected: 3
