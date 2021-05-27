/**
 * @param {number} n
 * @return {number[]}
 */
//Brian Kernighan 算法 O(nlogn) O(1)
var countBits = function (n) {
  let bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    bits[i] = countOnes(i);
  }
  return bits;
};
const countOnes = (x) => {
  let ones = 0;
  while (x > 0) {
    x &= x - 1;
    ones++;
  }
  return ones;
};

//动态规划--最低有效位 O(n) O(1)
var countBits = function (n) {
  let bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
};
