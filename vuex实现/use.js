// 接收一个插件
// 如果插件是一个对象，那么对象一定要具备install方法
// 如果插件是一个方法，那么这个方法必须充当install的角色
Vue.use = function (plugin) {// 接收一个插件
  const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
  // 规定只能调用一次
  if (installedPlugins.indexOf(plugin) > -1) {
    return this
  }
  // toArray把对象转换成数组的方法
  const args = toArray(arguments, 1)  // 拿到其他参数
  args.unshift(this) // [this,xxx]
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin,args)
  } else if (typeof plugin === 'function') {
    plugin.apply(plugin, args)
    
  }
  installedPlugins.push(plugin)
}
// 这里有一步这个操作
_installedPlugins = installedPlugins







// Toast.install = function(Vue){                       //这里备注：插件可以是一个对象，也可以就是一个函数（那它必须充当install的角色）且此时会被直接调用

// }

// Vue.use(Toast)//当时我们这样用，就真的能使得上面的Vue是这里调用use的Vue


// -----------------------------------------------------
// Vue.use = function(plugin){                 //接收一个插件
//     //这里会判断上一次是否记录过插件，如果没有，那么就是空数组，如果有，就是上一次的
//     const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))        
//     if(installedPlugins.indexOf(plugin)>-1){//说明该插件在这个数组里存在下标，也就是已经被执行
//        //判断是否已经安装了这个插件
//         return
//     }


//     const args = toArray(arguments,1)      //把类数组转换为真正的数组           
//     //这里的作用：拿到其他参数




//     //为什么用unshift将Vue放在最前面呢？
//     // 因为我们在调用的时候，传参是Vue.use(plugin,balabala)   而不是Vue.use(balabala,plugin)
//     args.unshift(this)      //头部插入  this(Vue   因为这个函数是Vue在调用)


//     //****************************      
//     //原码里面有这个判断,这个判断会让Vuex判断插件是否含有install方法
//     if(typeof plugin.install ==='function'){
//         plugin.install.apply(plugin,args)               //当插件被use之后，该install方法会将Vue作为参数传入 
//                 //args   具备Vue 的数组
//                 //apply 这里的作用为:防止作用域被更改
//     }



//     // 在别的地方，会完成这个神奇的转化：_installedPlugins = installedPlugins,记住就好了
//     installedPlugins.push(plugin)           //记录执行过哪些插件，防止重复执行插件，造成readme.md里面两个仓库问题


// }