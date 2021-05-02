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
      
    }
  }
}