# 对象接口
```ts
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
```
这种类型接口`labelledObj`会检查`label`这个参数，也可以接受其他参数

```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
```

这种类型接口`labelledObj`只接受有对应参数的对象

# 函数接口
```ts
// 函数接口
// 这个接口代表函数有两个参数，返回值类型为boolean
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 接口定义
let mySearch: SearchFunc;
// 传入两个对应的参数
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
//   返回boolean类型的值
  return result > -1;
}
```
上方是函数接口使用方法，但是有一个重点，**对应位置的参数必须保持对应的类型**，也就是按照顺序依次检查，所以**对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配**
例
```ts
let mySearch: SearchFunc;
// 这里参数名没有对上，但是位置对上了
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}
```

# 类型断言
[类型断言](https://juejin.cn/post/6994610183439646727)

例子
```ts
interface Student {
    name: string;
    speak(): string;
}
interface Teacher {
    name: string;
    talk(): string;
}
function isTeacher(people: Student | Teacher) {
    // * 此时people定义为Student
    people.talk() //报错
    (people as Teacher).talk() //不报错 类型断言，他就是Teacher
    return false;
}

```
自己的话来说
告诉TS，这个`people`变量就是`Teacher`类型
