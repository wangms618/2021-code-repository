// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// head = new ListNode(5, null)
// head2 = new ListNode(4, null)
// head.next = head2
// console.log(head);
// console.log(head.val)
var name = "windowsName";

function fn() {
  console.log(this.name)
  var name = 'Cherry';
  innerFunction();
  function innerFunction() {
    console.log(this.name);      // windowsName
  }
}

fn()