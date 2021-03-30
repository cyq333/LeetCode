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
 * @return {number[][]}
 */
//广度优先搜素 O(n) O(n)
var levelOrder = function (root) {
  let ret = [];
  if (!root) {
    return ret;
  }
  let q = [];
  q.push(root);
  while (q.length !== 0) {
    let currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; i++) {
      let node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
  return ret;
};
