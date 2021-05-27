/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//DFS递归
var serialize = function (root) {
  if (root == null) {
    return 'X';
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
//DFS递归
var deserialize = function (data) {
  let list = data.split(',');
  const buildTree = (list) => {
    const rootVal = list.shift();
    if (rootVal == 'X') {
      return null;
    }
    let root = new TreeNode(rootVal);
    root.left = buildTree(list);
    root.right = buildTree(list);
    return root;
  };
  return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

//BFS
var serialize = function (root) {
  let quene = [root];
  let res = [];
  while (quene.length) {
    let node = quene.shift();
    if (node) {
      res.push(node.val);
      quene.push(node.left);
      quene.push(node.right);
    } else {
      res.push('X');
    }
  }
  return res.join(',');
};

var deserialize = function (data) {
  if (data == 'X') {
    return null;
  }
  const list = data.split(',');
  let root = new TreeNode(list[0]);
  let quene = [root];
  let cursor = 1;
  while (cursor < list.length) {
    let node = quene.shift();
    let leftVal = list[cursor];
    let rightVal = list[cursor + 1];
    if (leftVal != 'X') {
      const leftNode = new TreeNode(leftVal);
      node.left = leftNode;
      quene.push(leftNode);
    }
    if (rightVal != 'X') {
      const rightNode = new TreeNode(rightVal);
      node.right = rightNode;
      quene.push(rightNode);
    }
    cursor += 2;
  }
  return root;
};
