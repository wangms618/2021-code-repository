/**
 * @description count string size
 */
export function foo(name: string) {
  const separator = ','
  return name.split(separator)
}

foo('string')


// 什么时候用泛型
// 普通
// function bar(arg: number | string): number | string { // 不够严谨，传number返回string怎么办
//   return arg
// }
// 泛型
// 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。
// function bar<T>(arg: T): T {
//   return arg
// }


// 类型定义在哪
export type fooItem = string | number | null // 用type创造类型
function baz(arg: fooItem):void {
  console.log(arg);
}
export interface useRes{  // useRes必须包含nickname和age类型，avatar不一定有
  nickname: string,
  avatar?: string,
  age:number
}

