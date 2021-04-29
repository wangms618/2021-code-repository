var LikedList = function () {
  // 链表头
  var head = null
  // 链表长度
  var length = 0
  // 辅助类：节点
  var Node = function (element) {
    this.element = element
    this.next = null
  }
  this.append = function (element) {
    var node = new Node(element)
    if (head == null) {
      head = node
    } else {
      var current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length ++
  }
  this.getHead = function () {
    return head
  }
}
var l = new LikedList
l.append(1)
l.append(2)
l.append(3)
console.log(l.getHead())