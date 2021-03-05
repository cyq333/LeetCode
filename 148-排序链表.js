/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//sort
var sortList = function (head) {
  if (!head) return null;
  var r = [];
  while (head) {
    r.push(head);
    var tmp = head.next;
    head.next = null;
    head = tmp;
  }
  r.sort((a, b) => a.val - b.val).reduce((p, v) => (p.next = v));
  return r[0];
};

//快速排序
var sortList = function (head) {
  var r = new ListNode(0, head);
  sort(r.next, null);
  return r.next;
};
var sort = (s, e) => {
  if (s === e) return;
  var target = s.val,
    p0 = s,
    p1 = s.next;
  while (p1 !== e) {
    if (p1.val < target) {
      p0 = p0.next;
      [p0.val, p1.val] = [p1.val, p0.val];
    }
    p1 = p1.next;
  }
  [p0.val, s.val] = [s.val, p0.val];
  sort(s, p0);
  sort(p0.next, e);
};
