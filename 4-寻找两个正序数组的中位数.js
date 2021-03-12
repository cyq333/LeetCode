/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//二分查找 O(log(m+n))
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const len = len1 + len2;
  let slice1 = 0;
  let slice2 = 0;
  let slice1L = 0;
  let slice1R = len1;
  let L1, L2, R1, R2;
  while (slice1 <= len1) {
    slice1 = Math.floor((slice1R - slice1L) / 2) + slice1L;
    slice2 = Math.floor(len / 2) - slice1;
    L1 = slice1 === 0 ? -Infinity : nums1[slice1 - 1];
    L2 = slice2 === 0 ? -Infinity : nums2[slice2 - 1];
    R1 = slice1 === len1 ? Infinity : nums1[slice1];
    R2 = slice2 === len2 ? Infinity : nums2[slice2];
    if (L1 > R2) {
      slice1R = slice1 - 1;
    } else if (L2 > R1) {
      slice1L = slice1 + 1;
    } else {
      if (len % 2 === 0) {
        const L = L1 > L2 ? L1 : L2;
        const R = R1 < R2 ? R1 : R2;
        return (L + R) / 2;
      } else {
        const median = R1 < R2 ? R1 : R2;
        return median;
      }
    }
  }
  return -1;
};
