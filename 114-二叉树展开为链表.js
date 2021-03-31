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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//递归 O(n) O(n)
const preorderTraversal = (root, list) => {
  if (root !== null) {
    list.push(root);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
  }
};
var flatten = function (root) {
  let list = [];
  preorderTraversal(root, list);
  for (let i = 1; i < list.length; i++) {
    let prev = list[i - 1];
    let curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};

//迭代 O(n) O(n)
var flatten = function (root) {
  let list = [];
  let stack = [];
  let node = root;
  while (node !== null || stack.length) {
    while (node !== null) {
      stack.push(node);
      list.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  for (let i = 1; i < list.length; i++) {
    let prev = list[i - 1];
    let curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};

//寻找前驱节点 O(n) O(1)
var flatten = function (root) {
  let curr = root;
  while(curr!==null) {
    if(curr.left!==null) {
      let next = curr.left;
      let predecessor = next;
      while(predecessor.right!==null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
}
