/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head
  }
  let newHead = reverseList(head.next)
  head.next.next = head;
  head.next = null
  return newHead
};

var reverseList = function(head) {
  let pre = null
  let cur = head
  let next = null
  while(cur){
      // next 存储当前节点的下一个节点
      next = cur.next
      // 当前节点的next指向前一个节点
      cur.next = pre
      // 这里使pre是下一次循环里cur的前一个节点
      pre = cur
      // 进到原来的下一个节点，下一轮继续反转
      cur = next
  }
  // 返回pre，因为他存储的一直是反转后的链表
  return pre
};



