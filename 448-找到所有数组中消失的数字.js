/**
 * @param {number[]} nums
 * @return {number[]}
 */
//原地修改 O(n) O(1)
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  for (const num of nums) {
    const x = (num - 1) % n;
    nums[x] += n;
  }
  let ret = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      ret.push(i + 1);
    }
  }
  return ret;
};
