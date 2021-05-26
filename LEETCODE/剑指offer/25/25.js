var mergeTwoLists = function(l1, l2) {
  let node = new ListNode(0)
  let node2 = node
  while(l1&&l2){
      if(l1.val>l2.val){
          node.next = l2
          l2 = l2.next
      }else{
          node.next = l1
          l1 = l1.next
      }
      node = node.next
  }
  if(l1){
      node.next = l1
  }
  if(l2){
      node.next = l2
  }
  return node2.next
};