/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  if(head==null) return null
  let start = head
  let end = head
  for(let i = 0;i<k;i++){
      start = start.next
  }
  while(start!=null){
      start=start.next
      end = end.next
  }
  return end
};