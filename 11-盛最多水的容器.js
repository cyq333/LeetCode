/**
 * @param {number[]} height
 * @return {number}
 */
//双指针
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let square = 0;
  let max = 0;
  while (i < j) {
    if (height[i] > height[j]) {
      square = height[j] * (j - i);
      j--;
    } else {
      square = height[i] * (j - i);
      i++;
    }
    max = Math.max(square, max);
  }
  return max;
};
