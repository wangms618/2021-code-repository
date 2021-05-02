let doc = document
let canvas = doc.getElementById('canvas')
let video = doc.getElementById('video')
let $txt = doc.getElementById('text')
let $btn = doc.getElementById('btn')
let $color = doc.getElementById('color')
let $range = doc.getElementById('range')

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
    
  }
}