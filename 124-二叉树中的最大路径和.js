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
 * @return {number}
 */
//递归 O(n) O(H)
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  const dfs = (root) => {
    if (root == null) {
      return 0;
    }
    const left = dfs(root.left);
    const right = dfs(root.right);
    const innerMaxSum = root.val + left + right;
    maxSum = Math.max(maxSum, innerMaxSum);
    const outputMaxSum = root.val + Math.max(left, right);
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };
  dfs(root);
  return maxSum;
};
