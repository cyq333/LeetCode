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
var diameterOfBinaryTree = function (root) {
  let ans = 1;
  function depth(rootNode) {
    if (!rootNode) {
      return 0;
    }
    let L = depth(rootNode.left);
    let R = depth(rootNode.right);
    ans = Math.max(ans, L + R + 1);
    return Math.max(L, R) + 1;
  }
  depth(root);
  return ans-1;
};
