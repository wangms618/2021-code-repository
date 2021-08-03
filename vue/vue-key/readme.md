1. vue中的key是用来做什么的
2. 为什么不推荐用index

[掘金地址](https://juejin.cn/post/6844904113587634184)
# diff
1. 新老节点类型是否相同，如果类型不同说明标签被改了，直接销毁旧的vnode，渲染新的vnode
2. 如果类型相同，就要尽可能做到节点复用 (pathVNode)
 - 如果新 vnode 是文字 ,就直接调用浏览器的 dom api 把节点的直接替换掉文字内容就好。
 - vnode不是文字
   - 没有old Children 有 new children的话，在原来的dom上添加新的子节点
   - 如果有old children 而没有new children 的话，说明是删除 children，直接 removeVnodes 删除旧子节点
   - 有new children 也有 old children的话，就需要标记了


# vue为什么不能用index作为key值
因为index作为key值，key值不能和value(文本内容)绑定，所以和没写基本上没区别，因为不管你数组的顺序怎么颠倒，index 都是 0, 1, 2 这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作。列表顺序不变也尽量别用，可能会误导新人。

如果类型相同，vnode不是文字，有new children 也有 old children 的话，
当使用index做key值时，key和value不能同步绑定，节点标记无效，dom结构需要重新渲染，消耗了浏览器性能