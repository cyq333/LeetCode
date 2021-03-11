/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let occ = new Set();
  const n = s.length;
  let rk = -1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
