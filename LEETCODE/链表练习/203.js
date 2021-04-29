var removeElements = function(head, val) {
  let newHead = new ListNode(),
  prev = newHead,
  curr = head;
  newHead.next = head;
  
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev.next;
    }
    else {
      prev = curr;
      curr = curr.next;
    }
  }
  
  return newHead.next;
};



console.log(removeElements([1,2,3,4,5,6],6))