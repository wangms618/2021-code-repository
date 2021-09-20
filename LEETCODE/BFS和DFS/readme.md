# BFS伪代码
```js
function BFS(入口坐标) {
    const queue = [] // 初始化队列queue
    // 入口坐标首先入队
    queue.push(入口坐标)
    // 队列不为空，说明没有遍历完全
    while(queue.length) {
        const top = queue[0] // 取出队头元素  
        
        访问 top // 此处是一些和 top 相关的逻辑，比如记录它对应的信息、检查它的属性等等
        
        // 注意这里也可以不用 for 循环，视题意而定
        for(检查 top 元素出发能够遍历到的所有元素)  {
            queue.push(top能够直接抵达的元素)
        }
        
        queue.shift() // 访问完毕。将队头元素出队
    }
}
```