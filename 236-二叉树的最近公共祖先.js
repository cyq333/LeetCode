/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//递归 O(n) O(n)
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
    if (root == null) {
      return false;
    }
    let lson = dfs(root.left, p, q);
    let rson = dfs(root.right, p, q);
    if (
      (lson && rson) ||
      ((root.val == p.val || root.val == q.val) && (lson || rson))
    ) {
      ans = root;
    }
    return lson || rson || root.val == p.val || root.val == q.val;
  };
  dfs(root, p, q);
  return ans;
};
