var CQueue = function() {
  // 两个栈进行队列操作
  this.stackA = []
  this.stackB = []
};

/** 
* @param {number} value
* @return {void}
*/
//  两个栈，appendTail将值压入第一个栈，deleteHead将第一个栈的所有值用pop取出push进第二个栈，然后删除(pop)第二个栈最后的元素，就做到了先入先出
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if(this.stackB.length){
      return this.stackB.pop()
  }else{
      while(this.stackA.length){
          this.stackB.push(this.stackA.pop())
      }
      if(!this.stackB.length){
          return -1
      }else{
          return this.stackB.pop()
      }
  }
};
/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/