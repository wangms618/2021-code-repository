# 理解前端路由
这段日子开始学习vue，在写了几个小应用后，我发现vue里的vue-router前端路由大大方便了单页面切换，故希望写一篇文章来加深自己对前端路由的理解。经过查阅资料后，我整理如下。

## 什么是路由
简单的说，路由是根据不同的 url 地址展示不同的内容或页面  
路由就是用来跟后端服务器进行交互的一种方式，通过不同的路径，来请求不同的资源，请求不同的页面是路由的其中一种功能。  
路由的描述的是URL和处理函数之间的一种映射  

## 什么是前端路由？
简单说就是前端控制页面跳转,而不需要要向后端去请求  
在前端单页应用中，路由描述的是URL和UI(页面)的映射关系



## 为什么会出现前端路由
以前传统的前端都是一个URL对应一个页面，所以不存在这个问题。随着SPA（single-page application）即单页应用的发展，组件的变化和更新不再对应着URL变化了。但是我们又需要这种对应关系（比如通过一个URL直接访问一个 SPA 应用的子视图），因为单页应用不仅仅是在页面交互是无刷新的，连页面跳转都是无刷新的，为了实现单页应用，所以就有了前端路由。我们急需一个工具专门负责维护组件状态与页面URL之间的对应关系，这就是前端路由的作用所在。



## 单页应用的优缺点
优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户
缺点：使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存。单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

# 如何实现前端路由
1. 改变URL,页面不刷新
2. 如何检测URL变化？

# 实现
# hash
实现原理：
hash在路由方面就是在url后面的#部分。在页面url后面加上"#"号后，再拼接其他值，地址栏回车后，页面不会进行跳转，这里就做到了不刷新页面，接下来的问题就是检测url的变化进行页面结构改变。因为浏览器地址上 # 后面的变化，是可以被监听的，它为我们提供了原生监听事件 hashchange。而且每次触发hashchange事件时，可以通过 location.hash 拿到当前浏览器地址的 hash 值
> hashchange事件:
 >>1、当URL的片段标识符更改时，将触发hashchange事件（跟在#符号后面的URL部分，包括#符号）  
 >>2、hashchange事件触发时，事件对象会有hash改变前的URL（oldURL）和hash改变后的URL（newURL）两个属性：window.addEventListener('hashchange',function(e) { console.log(e.oldURL);  console.log(e.newURL) },false);

了解了这些之后，我们来实现一个hash模式的简易路由：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hash实现</title>
</head>
<body>
  <div class="page">
    <ul>
      <!-- 两个页面 -->
      <li>
        <a href="#/home">首页</a>
      </li>
      <li>
        <a href="#/about">关于</a>
      </li>
    </ul>
  </div>
  <!-- 将对应url的结构放到这个dom结构里面 -->
  <div id="routerView"></div>
  <script>
    // 拿到routerView的dom结构
    let routerView = document.querySelector('#routerView')
    // 监听路由变化
    window.addEventListener('hashchange',onHashChange)
    // 页面初次加载执行一次hash监听
    // window.onload = function(){
    //   onHashChange()
    // } 
    // 监听页面的初次渲染完成，
    window.addEventListener('DOMContentLoaded',onHashChange)
    function onHashChange(){
      console.log(location.hash); // hashchange事件触发可以用location.hash拿到当前浏览器地址的 hash 值
      // 根据不同路径展示不同的内容
      switch(location.hash){
        case '#/home':
          routerView.innerHTML = '这是首页页面';
          return 
        case '#/about':
          routerView.innerHTML = '这是关于页面';;
          return 
        default:
          return 
      }
    }
    
  </script>
</body>
</html>
```
想看效果的小伙伴可以去试试，这里页面不会刷新。
总结：因为hash的改变不会引起页面刷新, 所以在URL后面拼接hash值，再通过监听hashchange事件检测到url的变化，从而去显示不同的页面(dom)结构，这就是hash的实现。

不知道小伙伴有没有注意一个细节，在创建vue项目时，它不会问你要不要创建hash模式，而是直接问你要不要用history模式。从这里我们可以看出，history比hash更加优秀。那为什么hash不如history呢，因为hash始终要在url后加一个#号，而history方式不需要，更加简洁，不影响地址栏。接下来我们来看看history模式。


# history
了解：
html 提供了一个**history**对象，该对象提供了pushState 和 replaceState 两个方法
history提供了类似于hashchange的事件popState,通过pushState/replaceState/a/标签改变URL是不会触发popState的
用pushState和replaceState顶替掉href的事件，且这两个事件会改变url


在 HTML 文档中，history.pushState() 方法向当前浏览器会话的历史堆栈中添加一个状态（state），**也就是向历史记录中追加一条记录**
。[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)

replaceState()方法修改当前历史记录实体，如果你想更新当前的state对象或者当前历史实体的URL来响应用户的的动作的话这个方法将会非常有用，**意思就是可以替换当前页在历史记录中的信息**。[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState)

语法：
```
history.pushState(state, title[, url])
history.replaceState(stateObj, title[, url]);
```
history特性：
可以使用popstate  事件来监听 url 的变化，  
history.pushState()或history.replaceState() 不会触发 popstate 事件，需要手动触发页面渲染。

知道这些我们来实现一下：
请用live-server打开，因为Location.pathName 是去域名的后面部分，所以必须live-server打开
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>history实现</title>
</head>
<body>
  <div class="page">
    <ul>
      <!-- 希望能干掉这两个页面的自动跳转，下面实现 -->
      <li><a href="/home">首页</a></li>
      <li><a href="/about">关于</a></li>
    </ul>
    <div id="routerView"></div>
    <script>
      let routerView = document.getElementById('routerView')
      // 点击浏览器的前进后退按钮使URL发生变化，靠监听popstate渲染正确的页面
      window.addEventListener('popstate',onPopState)

      // 为全部 a 标签安上点击事件
      window.addEventListener('DOMContentLoaded',onLoad)

      function onLoad(){
        // 页面初始加载
        onPopState()
        // 取到对应具有href属性的a标签数组
        let linkList = document.querySelectorAll('.page a[href]')
        // 手动给a标签安排点击事件
        linkList.forEach(el=>{
          el.addEventListener('click',function(e){
            e.preventDefault()  // 阻止a标签的默认事件
            // 手动让url发生改变，且页面不刷新
            history.pushState(null,'',el.getAttribute('href')) // getAttribute获取当前a标签的href属性
            // 手动调用onPopState()检测url的变化
            onPopState()
          })
        })
      }



      function onPopState() {
        // Location.pathName 去域名后面部分，所以必须live-server打开
        switch (location.pathname) {
          case '/home':
            routerView.innerHTML = '<h2>Home页面</h2>';
            return
          case '/about': 
            routerView.innerHTML = '<h2>About页面</h2>';
            return
          default:
            return
        }
      }
    </script>
  </div>
</body>
</html>
```