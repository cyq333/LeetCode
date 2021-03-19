/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//搜索回溯
//时间O(S)S为所有可行解的长度之和
//空间O(target)
var combinationSum = function (candidates, target) {
  let ans = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return ans;
};
