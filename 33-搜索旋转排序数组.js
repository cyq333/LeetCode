/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分搜索  O(logn)
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end + 1 - start) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[start]) {
      if (nums[start] <= target && nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] <= target && nums[end] >= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
