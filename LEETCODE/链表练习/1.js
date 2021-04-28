// Node 类用来保存节点上的数据，next用来保存下一个节点的链接
function Node(element) {// 构造函数
  this.element = element;// 当前节点的元素
  this.next = null; //下一个节点的元素
}
var node = new Node(1);
console.log(node.element)



    // function Person(){
    //     this.name = 'zhangsan';
    //     this.age = 18;
    // }
    // var p = new Person();
    // console.log(typeof p);//object