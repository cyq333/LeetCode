/**
 * @param {string} s
 * @return {string}
 */

//栈 O(n) O(n)
var decodeString = function (s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = '';
  for (const char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else if (char === '[') {
      numStack.push(num);
      num = 0;
      strStack.push(result);
      result = '';
    } else if (char === ']') {
      let repeatTimes = numStack.pop();
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += char;
    }
  }
  return result;
};
