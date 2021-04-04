/**
 * @param {number[]} nums
 * @return {number}
 */
//位运算-异或运算 O(n) O(1)
var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
