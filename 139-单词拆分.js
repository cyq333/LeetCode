/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//动态规划 O(n^2) O(n)
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const wordDictSet = new Set(wordDict);
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
