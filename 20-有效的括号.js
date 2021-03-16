/**
 * @param {string} s
 * @return {boolean}
 */
//栈
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  let stk = [];
  let res = true;
  s.split('').forEach((ch) => {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        res = false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  });
  return res && !stk.length;
};
