// 数组类型
const arr1: Array<number> = [1, 2, 3]; // 纯数字组成的数组
const arr2: number[] = [1, 2, 3]; // 元素类型+方括号，也表示纯数字组成的数组
function sum(...args:number[]) { // 数字+数组类型
    // 判断是不是每个成员都是数字
  return args.reduce((prev, current) => {
    return prev + current;
  }, 0);
}
sum(1,2,3)
