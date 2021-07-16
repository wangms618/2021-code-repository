/**
 * @description count string size
 */
export function foo(name: string){
  const separator = ','
  return name.split(separator)
}

foo('string')


// 什么时候用泛型

function bar(arg: number) {
  return arg
}
