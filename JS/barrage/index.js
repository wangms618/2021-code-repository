let doc = document
let canvas = doc.getElementById('canvas')
let video = doc.getElementById('video')
let $txt = doc.getElementById('text')
let $btn = doc.getElementById('btn')
let $color = doc.getElementById('color')
let $range = doc.getElementById('range')

let data = [
  {value: '麻烦给我爱人来一杯mojito', time: 5, color: 'red', speed: 1, fontSize: 22},
  {value: '听妈妈的话', time: 10, color: 'green', speed: 1, fontSize: 30},
  {value: '听话，晚点再恋爱吧！', time: 6},
  {value: '晚点再恋爱吧！', time: 15},
  {value: '再恋爱吧！', time: 20},
  {value: '恋爱吧！', time: 18}
]
创建CanvasBarrage类
class CanvasBarrage {
  // ={} 不传值，则默认为空对象（可以不传） 
  constructor(canvas,video,opts={}) {
    if (!canvas || !video) return
    // 把传进来的参数挂载到this上，方便取用
    this.video = video;
    this.canvas = canvas;
    // 设置canvas的宽高和video保持一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    // 创建画布
    this.ctx = canvas.getContext('2d')
    // 设置默认的参数，如果没传就带上
    let defOpts = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }
    // 对象合并再挂载到this上
    Object.assign(this, defOpts, opts)

    // 添加属性用于判断播放状态,默认true是暂停
    this.isPaused = true
    // 得到所有的弹幕消息
    this.barrages = this.data.map((item) => new Barrage(item, this))

    // 渲染
    this.render()
  }
  render() {
    // 清除原来的画布
    this.clear()
    // 渲染弹幕
    this.renderBarrage()
    // 判断如果没有暂停的话就继续渲染
    if (this.isPaused === false) {
      // 递归渲染
      requestAnimationFrame(this.render.bind(this))
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  renderBarrage() { // 渲染每一条弹幕
    // 首先拿到视频的播放时间
    let time = this.video.currentTime;

    // 遍历所有的弹幕
    this.barrages.forEach(barrage => {
      // 是否渲染过
      // 当前视频播放的时间是不是大于等于弹幕要出现的时间
      if (!barrage.flag && time >= barrage.time) {
        // 弹幕是否被初始化过
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }
        // 弹幕从右往左
        barrage.x -= barrage.speed
        barrage.render() // 渲染当前弹幕

        // 当当前弹幕的x坐标小于自身宽度时，就表示渲染结束
        if (barrage.x < -barrage.width) {
          barrage.flag = true
        }
      }
    })
  }
  add(obj) {
    this.barrages.push(new Barrage(obj, this))
  }
}