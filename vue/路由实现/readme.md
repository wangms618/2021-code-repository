# 路由
描述的是URL和处理函数之间的一种映射

在前端单页应用中，路由描述的是URL和UI(页面)的映射关系

# 实现路由
1. 改变URL,页面不刷新
2. 如何检测URL变化？

# hash
在URL后面的#部分
因为hash的改变天生就不会引起页面刷新, 所以在URL后面拼接hash值，再通过监听hashchange事件检测到url的变化，从而去显示不同的页面(dom)结构


# history
html 提供了一个**history**对象，该对象提供了pushState 和 replaceState 两个方法
history提供了类似于hashchange的事件popState,通过pushState/replaceState/a/标签改变URL是不会触发popState的
用pushState和replaceState顶替掉href的事件，且这两个事件会改变url
当pushState或replaceState执行了 popState 一定会生效