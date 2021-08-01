/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) {
    return false;
  }
  let x = matrix.length - 1;
  let y = 0;
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      x--;
    } else {
      y++;
    }
  }
  return false;
};
