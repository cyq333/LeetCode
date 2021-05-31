/**
 * @param {string} s
 * @return {string[]}
 */
//回溯法 DFS
var removeInvalidParentheses = function (s) {
  let res = [];
  let rmLeft = 0;
  let rmRight = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      rmLeft++;
    } else if (s[i] === ')') {
      if (rmLeft > 0) {
        rmLeft--;
      } else {
        rmRight++;
      }
    }
  }
  removeInvalidParenthesesHelper(s, 0, s.length, 0, '', res, rmLeft, rmRight);
  return [...new Set(res)];
};

/**
 *
 * @param {string 原字符串} s
 * @param {number 当前考虑的字符} start
 * @param {number s 的长度} end
 * @param {number 记录左括号和右括号的情况} count
 * @param {string 遍历的路径字符串} temp
 * @param {string[] 保存最终的结果} res
 * @param {number 当前需要删除的左括号数量} rmLeft
 * @param {number 当前需要删除的右括号数量} rmRight
 */
function removeInvalidParenthesesHelper(
  s,
  start,
  end,
  count,
  temp,
  res,
  rmLeft,
  rmRight
) {
  if (count < 0 || rmLeft < 0 || rmRight < 0) {
    return;
  }
  if (start === end) {
    if (count === 0 && rmLeft === 0 && rmRight === 0) {
      res.push(temp);
    }
    return;
  }
  if (s[start] === '(') {
    removeInvalidParenthesesHelper(
      s,
      start + 1,
      end,
      count + 1,
      temp + '(',
      res,
      rmLeft,
      rmRight
    );
  } else if (s[start] === ')') {
    removeInvalidParenthesesHelper(
      s,
      start + 1,
      end,
      count - 1,
      temp + ')',
      res,
      rmLeft,
      rmRight
    );
  } else {
    removeInvalidParenthesesHelper(
      s,
      start + 1,
      end,
      count,
      temp + s.charAt(start),
      res,
      rmLeft,
      rmRight
    );
  }
  if (s[start] === '(') {
    removeInvalidParenthesesHelper(
      s,
      start + 1,
      end,
      count,
      temp,
      res,
      rmLeft - 1,
      rmRight
    );
  } else if (s[start] === ')') {
    removeInvalidParenthesesHelper(
      s,
      start + 1,
      end,
      count,
      temp,
      res,
      rmLeft,
      rmRight - 1
    );
  }
}
