# 作用域
在调用栈中创建出了执行上下文，我们称这个上下文为作用域

当函数执行时，会创建一个成为执行期上下文的内部对象，一个执行期上下文定义了一个函数执行时的环境，函数每次执行时对象的执行上下文都是独一无二的，所以多次调用一个函数会导致创建多个执行上下文，当函数执行完毕，它所产生的执行上下文会被销毁

# 作用域链
[[scope]]中存储的执行期上下文对象的集合，这个集合呈链式连接，我们把这种链式连接叫做作用域链

两个函数互相嵌套，把里面的函数保存到外面的这个函数的外部，就一定会产生闭包
一个函数的AO对象被回收，那么这个AO对象里面的函数也会失效