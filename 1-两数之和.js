/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let prevNums = {};
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const targetNum = target - currNum;
    targetNumIndex = prevNums[targetNum];
    if (targetNumIndex !== undefined) {
      return [i, targetNumIndex];
    } else {
      prevNums[currNum] = i;
    }
  }
};
