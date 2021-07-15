0. 引入reset.css重置所有标签默认样式
1. 安装 vue-lazyload 目的是给图片使用懒加载
2. 安装 fastclick,因为移动端存在点击事件300ms延迟
3. 写插件
  - 插件一定要有install函数
  - 插件挂载到vue的原型上
  - 插件需要使用vue.extend()来声明 