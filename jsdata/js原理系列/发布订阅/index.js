class EventEmitter {
  constructor() {
    this.events = this.events || new Map()
  }
  addListener(type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type,fn)  // { building :fn }
    }  
  }
  emit(type) {
    let handle = this.events.get(type)
    handle.apply(this,[...arguments].slice(1))
  }
}

let emitter = new EventEmitter()
// 监听，订阅
emitter.addListener('building', e => {
  console.log('购买', e);
})

// 发布
emitter.emit('building', 200)