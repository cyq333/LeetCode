/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//快慢指针
var removeNthFromEnd = function (head, n) {
  let preHead = new ListNode(0);
  preHead.next = head;
  let slow = preHead;
  let fast = preHead;
  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return preHead.next;
};
