// var reversePrint = function(head) {
//   let nums = []
//    const visitor = function (head) {
//        if (head !== null) {
//            visitor(head.next)
//            nums.push(head.val)
//        }
//    };
//    visitor(head)
//    return nums
// };


// var reversePrint = function(head) {
//   let arr = []
//   while(head!==null){
//       arr.unshift(head.val)
//       head = head.next
//   }
//   return arr
// };


// var reversePrint = function(head) {
//   let nodeStart = []
//   let nodeEnd = []
//   let node = head
//   while(head){
//       nodeStart.push(head.val)
//       head = head.next
//   }
//   while(node){
//       nodeEnd.push(nodeStart.pop())
//       node = node.next
//   }
//   return nodeEnd
// };