const PENDING = 'pending'
const RESOLVED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  // 
  constructor(executor) {
    // 初始化值
    this.initValue()
    this.initBind()
    // 执行传入的resovve和reject函数
    executor(this.resolve, this.reject)
  }
  initValue() {
    this.value = null // 最终值
    this.state = PENDING // Promise初始状态为pending
  }
  initBind() {
    // resolve和reject的this指向永远指向当前的MyPromise实例
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }
  resolve(value) {
    // 如果state已变化则返回，因为状态改变后就不可修改
    if (this.state !== PENDING) return
    // 如果这个函数被调用，修改状态
    this.state = RESOLVED
    // 取到resolve里的参数
    this.value = value
  }
  reject(value) {
    if (this.state !== PENDING) return
    this.state = REJECTED
    this.value = value
  }

}