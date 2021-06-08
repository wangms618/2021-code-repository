// 如果取一个头节点，再取一个指针节点
// 如果一开始就是重复的，头节点向后移动
// 如果在中间重复，移动指针到重复节点时，当前节点和后节点相等，先将当前节点的next指向后节点的next，然后再与后节点比较
// 如果后节点不是，则要将自己删除
var deleteDuplicates = function(head) {
  if(head === null || head.next === null) return head
  let node = new ListNode(0)
  node.next = head
  let cur = head
  if(cur.val === cur.next.val){
      let val = cur.val
      while(val==cur.next.val && cur.next!==null){
          node.next = cur.next
          cur = cur.next
      }
  }else{
      // 这里就差删除自己节点的内容，后面写
      while(cur.next!==null){
          if(cur.val===cur.next.val){
              while(cur.val === cur.next.val){
                  cur.next = cur.next.next
              }      
          }else{
              cur = cur.next
          }
      }
  }
  return node.next
};