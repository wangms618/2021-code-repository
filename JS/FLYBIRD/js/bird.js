var bird = {
  flyTime: null,//小鸟飞翔的定时器
  wingTimer: null,// 小鸟翅膀摆动的定时器


  
  div: document.createElement('div'),
  //创建节点,一个div标签
  showBird: function (parentObj) {
    this.div.style.width = '40px'
    this.div.style.height = '28px'
    this.div.style.backgroundImage = 'url(img/bird0.png)'
    // 禁止图片平铺
    this.div.style.backgroundRepeat = 'no-repeat'
    this.div.style.position = 'absolute'
    this.div.style.left = '50px'
    this.div.style.top = '200px'
    parentObj.appendChild(this.div)
  },
  fallSpeed: 0,// 小鸟下降的速度
  // 控制小鸟下落
  flyBird: function(){
    this.flyTime = setInterval(fly, 60)
    function fly() {
      bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
      if (bird.div.offsetTop >= 395) { //掉地上了
        bird.fallSpeed = 0
        bird.div.offsetTop = '395px';
        clearInterval(bird.flyTime)
        clearInterval(bird.wingTimer)//清除定时器
      }
      // 不让小鸟飞出界
      if (bird.div.offsetTop < 0) {
        bird.div.style.top = '0px'
        bird.fallSpeed = 2
      }
      if (bird.fallSpeed > 12) {
        bird.fallSpeed = 12
      }

    }
  },
  wingWave: function () {//控制小鸟煽动翅膀
    var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)']
    var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
    bird.wingTimer = setInterval(wing, 200)
    var i = 0, j= 0
    function wing() {
      if (bird.fallSpeed > 0) {
        bird.div.style.backgroundImage = down[i++]
        if (i == 2) {
          i = 0;
        }
      }
      if (bird.fallSpeed < 0) {
        bird.div.style.backgroundImage = up[j++]
          if (j == 2)
          { j=0 }
      }
    }
  }

}