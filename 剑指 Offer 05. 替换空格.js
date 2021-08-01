/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let strArr = s.split('');
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      count++;
    }
  }
  strArr.length = strArr.length + count * 2;
  let left = s.length - 1;
  let right = strArr.length - 1;
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }
  return strArr.join('');
};
