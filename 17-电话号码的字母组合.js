/**
 * @param {string} digits
 * @return {string[]}
 */
//dfs回溯
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let res = [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const dfs = (currStr, i) => {
    if (i > digits.length - 1) {
      res.push(currStr);
      return;
    }
    const letters = map[digits[i]];
    for (const letter of letters) {
      dfs(currStr + letter, i + 1);
    }
  };
  dfs('', 0);
  return res;
};
