<!--
 * @Author: your name
 * @Date: 2021-11-02 11:17:24
 * @LastEditTime: 2021-11-02 17:52:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /typescript/b站TS/readme.md
-->

- tsc --locale zh-CN 使用中文显示错误消息

# 04 Object 类型

```ts
const foo: object = function () {};
```

- object 全小写，可以接受对象、数组、函数

# 05 数组类型

```ts
const arr1: Array<number> = [1, 2, 3]; // 纯数字组成的数组
const arr2: number[] = [1, 2, 3]; // 元素类型+方括号，也表示纯数字组成的数组
function sum(...args: number[]) {
  // 数字+数组类型
  // 判断是不是每个成员都是数字
  return args.reduce((prev, current) => {
    return prev + current;
  }, 0);
}
sum(1, 2, 3);
```

# 06 元组类型

```ts
const tuple: [number, string] = [18, "zce"];
// const age = tuple[0];
// const name = tuple[1];
const [age, name] = tuple;
```

# 07 枚举

```ts

```

# 08 函数类型

```ts

```

# 09 any

any不会有任何的类型检查

# 10 隐式类型推断

```ts
let age = 18 // age被推断成了number , 也就是等于age:number
let foo // 不赋值，判断为any
```


# 11 类型断言

```ts
// 使用as进行类型断言
const num1 = res as number; // 断言res就是number,num1就是数字
// 使用<>断言
const num2 = <number>res;  // JSX 下不能使用
```
类型断言不是类型转换，并不是把一个类型转换为了另外一个类型，它只是在编译过程中的概念
# 1213 接口

```ts

```

# 14 类(描述一类具体食物的抽象特征)

```ts

```
类的属性在使用之前必须要在类型当中去声明，目的是给属性去做类型的标注
# 15 类的访问修饰符

```ts

```
// 构造函数修饰符默认是public,如果是private，那么他不能被实例化，也无法被继承
// 解决方法 ： 在类的内部添加静态方法，在静态方法中去创建类型的实例
# 16 类的只读属性

```ts

```

# 17 类与接口

# 18 抽象类

# 19 泛型

# 20 类型声明