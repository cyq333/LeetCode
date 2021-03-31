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
//深度优先搜索 O(n) O(height)
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};

//广度优先搜索
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let quene = [];
  quene.push(root);
  let depth = 1;
  while (quene.length) {
    let levelSize = quene.length;
    for (let i = 0; i < levelSize; i++) {
      let cur = quene.shift();
      if (cur.left) {
        quene.push(cur.left);
      }
      if (cur.right) {
        quene.push(cur.right);
      }
    }
    if (quene.length) {
      depth++;
    }
  }
  return depth;
};
