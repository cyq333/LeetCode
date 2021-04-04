/**
 * @param {number[]} prices
 * @return {number}
 */
//动态规划 O(n) O(1)
var maxProfit = function (prices) {
  if (!prices || !prices.length) {
    return 0;
  }
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    min = Math.min(min, prices[i]);
    max = Math.max(max, price - min);
  }
  return max;
};
