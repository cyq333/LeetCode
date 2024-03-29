/**
 * @param {character[][]} matrix
 * @return {number}
 */
//动态规划 O(mn) O(mn)
var maximalSquare = function (matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  let max = 0;
  let dp = new Array(rows + 1).fill(0).map(() => new Array(cols + 1).fill(0));
  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return max * max;
};
