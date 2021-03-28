/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//深度优先搜索
var exist = function (board, word) {
  const h = board.length;
  const w = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let visited = new Array(h).fill(false).map(() => new Array(w).fill(false));
  const check = (i, j, s, k) => {
    if (board[i][j] !== s.charAt(k)) {
      return false;
    } else if (k === s.length - 1) {
      return true;
    }
    visited[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      let newi = i + dx;
      let newj = j + dy;
      if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
        if (!visited[newi][newj]) {
          let flag = check(newi, newj, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let flag = check(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
};
