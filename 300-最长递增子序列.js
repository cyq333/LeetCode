/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划 O(n^2) O(n)
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n == 0) {
    return 0;
  }
  let dp = new Array(n).fill(1);
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
