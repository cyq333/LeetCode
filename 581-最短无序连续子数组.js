/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let sortNums = [...nums].sort((a, b) => a - b);
  let left, right;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (sortNums[i] !== nums[i] && isNaN(left)) {
      left = i;
    }
    if (sortNums[len - 1 - i] !== nums[len - 1 - i] && isNaN(right)) {
      right = len - 1 - i;
    }
  }
  return right - left + 1 || 0;
};
