// 1. == vs ===
if (x == y) {
  console.log(true);
}
// 1. x y 类型是否相等，相等就比较大小
// 2. 类型不相等，就进行类型转换
// 3. 会先判断是否在对比 null 和 undefined, 是的话返回true
// 4. 判断是否在对比 string 和 number ,是的话就会将字符串转换为number
// 5. 如果有一方为boolean ，就会把布尔值转为number
// 6. 如果有一方为object, 且另一方为string, number, 或者symbol, 就会把object转为原始类型进行比较

[] == ![]