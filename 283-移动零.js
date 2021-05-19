/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//双指针
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      if (j < i) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
    i++;
  }
  return nums;
};
