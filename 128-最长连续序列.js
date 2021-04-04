/**
 * @param {number[]} nums
 * @return {number}
 */
//哈希表 O(n) O(n)
var longestConsecutive = function (nums) {
  let numSet = new Set();
  for (const num of nums) {
    numSet.add(num);
  }
  let longestStreak = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};
