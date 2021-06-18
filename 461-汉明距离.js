/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//移位实现位计数 O(logC) O(1)
var hammingDistance = function (x, y) {
  let s = x ^ y;
  let ret = 0;
  while (s != 0) {
    ret += s & 1;
    s >>= 1;
  }
  return ret;
};

//Brian Kernighan 算法
var hammingDistance = function (x, y) {
  let s = x ^ y;
  let ret = 0;
  while (s != 0) {
    s &= s - 1;
    ret++;
  }
  return ret;
};
