// 数据域
// let list = {
//   val: 1,
//   // 指针域
//   next: {
//     val: 2
//     // next:...
//   }
// }

function ListNode(val) {
  this.val = val,
  this.next = null
}
// const node = new ListNode(1)
// node.next = new ListNode(2)
// 增加
// const node4 = new ListNode(4)
// node4.next = node2.next
// node2.next = node4