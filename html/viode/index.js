// 拿到要操作的dom
// 取到鼠标在该dom上滑动的距离
// 改变dom的高度
// 改变视频的播放速度


// 获取类名的一个方法querySelector
var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

speed.addEventListener('mousemove', function (e) {
  // Y轴坐标e.pageY , offsetTop是获取某个dom结构到浏览器顶部的距离,得到鼠标在白色区域的位置
  var y = e.pageY - speed.offsetTop
  console.log(y);
  // 获取某个dom结构自身的高度
  var percent = y / speed.offsetHeight
  // 播放速度 min max
  var min = 0.4
  var max = 4
  var height = Math.round(percent * 100) + '%'
  // 把计算出来的高度赋值给容器的高度属性
  bar.style.height = height
  // 对应倍数改变 textContent改变对应结构里的文本内容  toFixed(1)代表保留一位小数
  var playbackRate = percent * (max - min) + min
  bar.textContent = playbackRate.toFixed(1) + 'x'
  // 控制video播放速度的属性 playbackRate (这里第一个 playbackRate 是一个属性不是一个变量)
  video.playbackRate = playbackRate 
})
