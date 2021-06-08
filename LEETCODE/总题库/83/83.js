// // 双指针，一个指向当前节点，一个遍历节点
// // 如果当前指针指向的值不等于遍历节点，那么两个节点均向后挪
// var deleteDuplicates = function(head) {
//   if(head == null || head.next ==null) return head
//   // 指向头节点
//   let cur = head
//   // 指向下一个节点
//   let pre = head.next
//   while(pre!=null)
//   if(cur.val!=pre.val){
//       cur= cur.next
//       pre = pre.next
//   }else{
//       pre = pre.next
//       cur.next = pre
//   }
//   return head
// };

