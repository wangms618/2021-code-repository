// 模板字符串

// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);
// In JavaScript '
// ' is a line-feed.

// 多行字符串
let a = `In JavaScript this is
 not legal.`
console.log(a);
// In JavaScript this is
//  not legal.

console.log(`string text line 1
string text line 2`);
// string text line 1   
// string text line 2

// 字符串中嵌入变量
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`) // Hello Bob, how are you today?

// 使用反引号(`)需要在前面使用反斜杠转义(\`)
let greeting = `\`Yo\` World!`;
console.log(greeting); // `Yo` World!

// 模板字符串中嵌入变量，需要将变量名写在${}之中。
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      // 传统写法为
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'
      `User ${user.name} is not authorized to do ${action}.`);
  }
}

// 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`);
// "1 + 2 = 3"

console.log(`${x} + ${y * 2} = ${x + y * 2}`);
// "1 + 4 = 5"

let obj = { x: 1, y: 2 };
`${obj.x + obj.y}`
// "3"

// 模板字符串之中还能调用函数。
function fn() {
  return "Hello World";
}

console.log(`foo ${fn()} bar`);
// foo Hello World bar