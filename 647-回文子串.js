/**
 * @param {string} s
 * @return {number}
 */
//中心拓展 O(n^2) O(1)
var countSubstrings = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    let l = i / 2;
    let r = i / 2 + (i % 2);
    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
      l--;
      r++;
      ans++;
    }
  }
  return ans;
};
