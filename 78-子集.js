/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//回溯
var subsets = function (nums) {
  let res = [];
  const dfs = (index, list) => {
    if (index === nums.length) {
      res.push(list.slice());
      return;
    }
    list.push(nums[index]);
    dfs(index + 1, list);
    list.pop();
    dfs(index + 1, list);
  };
  dfs(0, []);
  return res;
};
