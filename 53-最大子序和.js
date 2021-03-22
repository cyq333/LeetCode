/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
//时间O(n)
//空间O(1)
var maxSubArray = function (nums) {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
