/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//暴力法 O(n^2)
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
};

//单调栈 O(n) O(n)
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let res = new Array(n).fill(0);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
};
