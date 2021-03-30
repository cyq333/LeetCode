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
const check = (p, q) => {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
};
var isSymmetric = function (root) {
  return check(root, root);
};

//迭代 O(n) O(n)
const check = (u, v) => {
  let q = [];
  q.push(u);
  q.push(v);
  while (q.length) {
    u = q.shift();
    v = q.shift();
    if (!u && !v) {
      continue;
    }
    if (!u || !v || u.val !== v.val) {
      return false;
    }
    q.push(u.left);
    q.push(v.right);
    q.push(u.right);
    q.push(v.left);
  }
  return true;
};
var isSymmetric = function (root) {
  return check(root, root);
};
