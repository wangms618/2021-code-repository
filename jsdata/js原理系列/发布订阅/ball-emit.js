class Subscribe {
  constructor() {
    this.pond = []
  }
  // 订阅
  add(fn) { // 往容器中增加方法
    let pond = this.pond, isExist = false;
    // 去重
    pond.forEach(item => item === fn ? isExist = true : null)
    !isExist ? pond.push(fn) : null
  }

  remove(fn) {
    let pond = this.pond;
    pond.forEach((item, index) => {
      if (item === fn) {
        pond[index] = null
      }
    })
  }

  // 发布
  fire(...arg) {
    let pond = this.pond;
    for (let i = 0; i < pond.length; i++) {
      let item = pond[i]
      if (item === null) {
        pond.splice(i, 1)
        i--
        continue;
      }
      item(...arg)
    }
  }
}