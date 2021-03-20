/**
 * @param {number[]} height
 * @return {number}
 */
//对撞指针
//时间O(n)
//空间O(1)
var trap = function (height) {
  let leftCur = 0;
  let rightCur = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;
  while (leftCur < rightCur) {
    let left = height[leftCur];
    let right = height[rightCur];
    if (left < right) {
      leftMax = Math.max(left, leftMax);
      res += leftMax - left;
      leftCur++;
    } else {
      rightMax = Math.max(rightMax, right);
      res += rightMax - right;
      rightCur--;
    }
  }
  return res;
};
