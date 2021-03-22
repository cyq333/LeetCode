/**
 * @param {number[]} nums
 * @return {boolean}
 */
//贪心 时间O(n) 空间O(1)
var canJump = function (nums) {
  let maxDistance = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0 && maxDistance <= i) {
      break;
    }
    if (i + nums[i] > maxDistance) {
      maxDistance = i + nums[i];
    }
  }
  return maxDistance >= len - 1;
};
