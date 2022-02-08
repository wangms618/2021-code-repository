// 往window上挂上Promise
(function (window) {
  function myPromise(execotor) {
    let self = this
    // 开关变量
    self.status = 'pending'
    self.data = undefined // 存储resolve的结果
    self.callbacks = [] // 把写在.then里面的回调存起来 

    function resolve(value) {
      if (self.status!=='pending') { // 状态已经改变则无效
        return 
      }
      // 将状态改变成resolved
      self.status = 'resolved'
      // 存值
      self.data = value
      // 如果有待执行的callback函数，立即执行异步执行它
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)
          })
        },0)
      }

    } // 需要自执行
    function reject() {
      
    }
    try {
      execotor(resolve,reject)
    } catch (error) {
      console.log(error);
    }

  }
  // promise 挂载各种方法，原型对象挂载方法
  // .then可以走两个回调，他也可以接受错误 
   Promise.prototype.then = function (onResolved, onRejected) {
    if (self.status == 'resolved') {
      onResolved()
    }
    this.callbacks.push({onResolved, onRejected})
  }

  Promise.prototype.catch = function () {

  }
  // promise 函数函数对象上挂载方法
  Promise.resolve = function (value) {
    
  }
  Promise.reject = function (value) {
    
  }
  Promise.all = function (value) {
    
  }
  // race里面返回最先执行完的结果 
  Promise.race = function (value) {
    
  }



  window.myPromise = Promise
})()