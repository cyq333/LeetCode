/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//前缀和+哈希表 O(n) O(n)
var subarraySum = function (nums, k) {
  let mp = new Map();
  mp.set(0, 1);
  let count = 0;
  let pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    mp.set(pre, mp.has(pre) ? mp.get(pre) + 1 : 1);
  }
  return count;
};
