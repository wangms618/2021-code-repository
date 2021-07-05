 **computed**里调用methods里的函数要带上this.
 v-text作用 如果message加载不出来，不显示
 `<span v-text="message"></span>`
   key.键盘码可以指定按键 `v-on:keyup.enter`

   Vue.set
   由于Javascript的限制，Vue不能自动检测以下变动的数组。

当你利用索引直接设置一个项时，vue不会为我们自动更新。
当你修改数组的长度时，vue不会为我们自动更新。

vue里不支持from-here使用-这种形式，需要将-修改成驼峰形式才可使用
挂载   new xxx().$mount('xxx');

```js
      updated: function () {
        console.log('我是原生的update');
      },
      mixins: [addLog]//混入
```
全局混入最先执行,混入的先执行，原生的后执行