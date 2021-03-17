/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  let len = nums.length;
  let i = len - 2;
  let j = len - 1;
  let k = len - 1;
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }
  if (i < 0) {
    return nums.sort((a, b) => a - b);
  }
  while (i < k && nums[i] >= nums[k]) {
    k--;
  }
  const swap = (nums, i, k) => {
    let temp = nums[i];
    nums[i] = nums[k];
    nums[k] = temp;
  };
  swap(nums, i, k);
  while (len > j) {
    swap(nums, j, len - 1);
    j++;
    len--;
  }
  return nums;
};
