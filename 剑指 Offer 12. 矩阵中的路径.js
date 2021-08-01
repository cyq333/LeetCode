/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;
  const dfs = (i, j, board, word, index) => {
    if (i < 0 || i >= row || j < 0 || j >= col || word[index] !== board[i][j]) {
      return false;
    }
    if (index === word.length - 1) {
      return true;
    }
    let temp = board[i][j];
    board[i][j] = '-';
    let res =
      dfs(i - 1, j, board, word, index + 1) ||
      dfs(i + 1, j, board, word, index + 1) ||
      dfs(i, j - 1, board, word, index + 1) ||
      dfs(i, j + 1, board, word, index + 1);
    board[i][j] = temp;
    return res;
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, board, word, 0)) {
        return true;
      }
    }
  }
  return false;
};
