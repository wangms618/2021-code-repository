// 编译阶段 编译阶段可以检查最严重的错误  执行阶段
console.log(showName);
//showName();// 代码文件 -> 导入内存 申请变量空间 没有这个东西
// 代码是顺序执行的
// JS代码 在编译阶段发生了什么  JS变量的声明提升到当前作用域的最顶端 
// scope 对象 会把所有的变量放进去  当前代码运行的环境 执行上下文 { myName }
console.log(myname);// 执行语句 （执行阶段） 报错？引用错误 undifined 变量提升  在他执行之前已经进行了一次编译
// var myname = '极客';// 赋值语句 （执行阶段)
var myname; // 编译阶段  undefined JS的类型是由值决定的
myname = '极客'; // 执行阶段

// function showName() { //函数与普通变量声明来做对比，调用
//   console.log('函数showName被执行了');
// }
// 函数表达式
var showName = function () {
  console.log('函数showName被执行了');
}
