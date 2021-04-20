/**
 * @param {number[]} nums
 * @return {number[]}
 */
//左右乘积列表 O(n) O(n)
var productExceptSelf = function (nums) {
  const length = nums.length;
  let L = new Array(length);
  let R = new Array(length);
  let answer = new Array(length);
  L[0] = 1;
  for (let i = 1; i < length; i++) {
    L[i] = nums[i - 1] * L[i - 1];
  }
  R[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    R[i] = nums[i + 1] * R[i + 1];
  }
  for (let i = 0; i < length; i++) {
    answer[i] = L[i] * R[i];
  }
  return answer;
};

//空间复杂度 O(1) 的方法 O(n) O(1)
var productExceptSelf = function (nums) {
  const length = nums.length;
  let answer = new Array(length);
  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }
  return answer;
};
