/**
 * @param {number} n
 * @return {string[]}
 */
//回溯
var generateParenthesis = function (n) {
  let res = [];
  const dfs = (lRemain, rRemain, str) => {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + '(');
    }
    if (lRemain < rRemain) {
      dfs(lRemain, rRemain - 1, str + ')');
    }
  };
  dfs(n, n, '');
  return res;
};
