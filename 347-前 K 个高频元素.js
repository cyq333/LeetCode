/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//map+数组 O(nlogn) O(n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  let arr = [...new Set(nums)];
  nums.map((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

//桶排序 O(n)  O(n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  nums.map((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  if (map.size <= k) {
    return [...map.keys()];
  }
  return bucketSort(map, k);
};
let bucketSort = (map, k) => {
  let arr = [];
  let res = [];
  map.forEach((value, key) => {
    if (!arr[value]) {
      arr[value] = [key];
    } else {
      arr[value].push(key);
    }
  });
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i]);
    }
  }
  return res;
};
