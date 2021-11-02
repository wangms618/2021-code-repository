// 泛型
// 定义函数接口和类的时候，没有去指定具体的类型，等到使用的时候再去指定具体类型
export {};
function createNumberArray(length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value); // 泛型参数<number>，调用时再去传递一个具体的类型
  return arr;
}
const res = createNumberArray(3, 100);

function createArray<T>(length: number, value: T): T[] { // <T>指代泛型参数
  const arr = Array<T>(length).fill(value); // 泛型参数<number>，调用时再去传递一个具体的类型
  return arr;
}
const res2 = createArray<string>(3,'123') // 这里就可以选择创建任意类型的数组了
