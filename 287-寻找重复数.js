/**
 * @param {number[]} nums
 * @return {number}
 */
//二分查找 O(nlogn) o(1)
var findDuplicate = function (nums) {
  const n = nums.length;
  let l = 1;
  let r = n - 1;
  let ans = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= mid) {
        cnt++;
      }
    }
    if (cnt <= mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
      ans = mid;
    }
  }
  return ans;
};

//快慢指针 O(n) O(1)
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
