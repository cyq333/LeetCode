/**
 * @param {character[][]} matrix
 * @return {number}
 */
//柱状图的优化暴力方法
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;
  let left = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
      }
    }
  }
  let ret = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') {
        continue;
      }
      let width = left[i][j];
      let area = width;
      for (let k = i - 1; k >= 0; k--) {
        if(left[k][j]===0) {
          break;
        }
        width = Math.min(width, left[k][j]);
        area = Math.max(area, (i - k + 1) * width);
      }
      ret = Math.max(ret, area);
    }
  }
  return ret;
};

//单调栈？？
