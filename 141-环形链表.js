/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//哈希表 O(n) O(n)
var hasCycle = function (head) {
  let map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, true);
    head = head.next;
  }
  return false;
};

//快慢指针 O(n) O(1)
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast) {
    if (fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
