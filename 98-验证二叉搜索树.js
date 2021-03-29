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
 * @return {boolean}
 */
//递归 O(n) O(n)
const helper = (root, lower, upper) => {
  if (root === null) {
    return true;
  }
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  return (
    helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  );
};
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
};

//中序遍历 O(n) O(n)
var isValidBST = function (root) {
  let stack = [];
  let inorder = -Infinity;
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};
