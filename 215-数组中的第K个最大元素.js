/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//数组排序，取第k个数
var findKthLargest = function (nums, k) {
  let newNums = nums.sort((a, b) => b - a);
  return newNums[k - 1];
};

//小顶堆
//对于索引为 n 的结点来说：
//索引为 (n-1)/2 的结点是它的父结点
//索引 2*n+1 的结点是它的左孩子结点
//索为引 2*n+2 的结点是它的右孩子结点
const findKthLargest = (nums, k) => {
  let heap = [];
  let n = 0;
  const len = nums.length;
  function createHeap() {
    for (let i = 0; i < k; i++) {
      insert(nums[i]);
    }
  }
  function insert(x) {
    heap[n] = x;
    upHeap(0, n);
    n++;
  }
  function upHeap(low, high) {
    let i = high;
    let j = Math.floor((i - 1) / 2);
    while (j >= low) {
      if (heap[j] > heap[i]) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
        i = j;
        j = Math.floor((i - 1) / 2);
      } else {
        break;
      }
    }
  }
  function updateHeap() {
    for (let i = k; i < len; i++) {
      if (nums[i] > heap[0]) {
        heap[0] = nums[i];
        downHeap(0, k);
      }
    }
  }
  function downHeap(low, high) {
    let i = low;
    let j = 2 * i + 1;
    while (j <= high) {
      if (j + 1 <= high && heap[j + 1] < heap[j]) {
        j = j + 1;
      }
      if (heap[i] > heap[j]) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
        i = j;
        j = 2 * i + 1;
      } else {
        break;
      }
    }
  }
  createHeap();
  updateHeap();
  return heap[0];
};
