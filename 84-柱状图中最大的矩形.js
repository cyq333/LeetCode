/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  if (!heights || heights.length === 0) {
    return 0;
  }
  let max = -1;
  const len = heights.length;
  for (let i = 0; i < len; i++) {
    if (i === len - 1 || heights[i] > heights[i + 1]) {
      let minHeight = heights[i];
      for (let j = i; j >= 0; j--) {
        minHeight = Math.min(minHeight, heights[j]);
        max = Math.max(max, minHeight * (i - j + 1));
      }
    }
  }
  return max;
};

//单调递增栈
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      let stackTopIndex = stack.pop();
      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      );
    }
    stack.push(i);
  }
  return maxArea;
};
