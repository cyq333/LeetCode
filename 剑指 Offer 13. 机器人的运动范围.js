/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const getSum = (num) => {
    let ans = 0;
    while (num) {
      ans += num % 10;
      num = Math.floor(num / 10);
    }
    return ans;
  };
  const directionAry = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let set = new Set(['0,0']);
  let quene = [[0, 0]];
  while (quene.length) {
    let [x, y] = quene.shift();
    for (let i = 0; i < 4; i++) {
      let offsetX = x + directionAry[i][0];
      let offsetY = y + directionAry[i][1];
      if (
        offsetX < 0 ||
        offsetX >= m ||
        offsetY < 0 ||
        offsetY >= n ||
        getSum(offsetX) + getSum(offsetY) > k ||
        set.has(`${offsetX},${offsetY}`)
      ) {
        continue;
      }
      set.add(`${offsetX},${offsetY}`);
      quene.push([offsetX, offsetY]);
    }
  }
  return set.size;
};
