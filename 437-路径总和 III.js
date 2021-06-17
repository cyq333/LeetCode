/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let map = new Map();
  let ans = 0;
  dfs(root, 0);
  return ans;
  function dfs(root, presum) {
    if (!root) {
      return 0;
    }
    map.set(presum, (map.get(presum) || 0) + 1);
    let target = presum + root.val;
    ans += map.get(target - targetSum) || 0;
    dfs(root.left, target);
    dfs(root.right, target);
    map.set(presum, map.get(presum) - 1);
  }
};
