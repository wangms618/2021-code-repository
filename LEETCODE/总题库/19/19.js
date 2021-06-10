//  双指针，前指针先向前移动n步，再与后指针一同移动
var removeNthFromEnd = function(head, n) {
  let start = head
  let end = head
  for(let i = 0;i<n;i++){
      start = start.next
  }
  if(!start) return head.next
  while(start.next){
      start = start.next
      end = end.next
  }
  end.next = end.next.next
  return head
};