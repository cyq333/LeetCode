/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//深度优先搜索DFS 回溯
//时间O(n×n!)
//空间O(n)
var permute = function (nums) {
  let res = [];
  let used = {};
  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (const num of nums) {
      if (used[num]) {
        continue;
      }
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  };
  dfs([]);
  return res;
};
