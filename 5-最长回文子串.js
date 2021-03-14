/**
 * @param {string} s
 * @return {string}
 */
//动态规划
var longestPalindrome = function (s) {
  let dp = [];
  const len = s.length;
  let st = 0;
  let end = 0;
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = 1;
  }
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      st = i;
      end = i + 1;
    }
  }
  for (let n = 3; n <= len; n++) {
    for (let i = 0; i <= len - n; i++) {
      let j = i + n - 1;
      if (dp[i + 1][j - 1]) {
        if (s[i] === s[j]) {
          dp[i][j] = 1;
          st = i;
          end = j;
        }
      }
    }
  }
  return s.substring(st, end + 1);
};
