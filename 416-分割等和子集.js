/**
 * @param {number[]} nums
 * @return {boolean}
 */
//动态规划
var canPartition = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0;
  let maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = num > maxNum ? num : maxNum;
  }
  if (sum % 2) {
    return false;
  }
  const target = sum / 2;
  if (maxNum > target) {
    return false;
  }
  let dp = new Array(n)
    .fill(0)
    .map(v=>new Array(target+1,false));
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= target; j++) {
      if (j >= nums[i]) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n - 1][target];
};

//降维
var canPartition = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0;
  let maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = num > maxNum ? num : maxNum;
  }
  if (sum % 2) {
    return false;
  }
  const target = sum / 2;
  if (maxNum > target) {
    return false;
  }
  let dp = new Array(target+1).fill(false);
  dp[0]=true
  for(const num of nums) {
    for(let j=target;j>=num;j--) {
      dp[j]=dp[j]|dp[j-num];
    }
  }
  return dp[target];
};
