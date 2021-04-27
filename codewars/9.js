// 你的目标是实现一个差分函数，从一个列表中减去另一个列表并返回结果。
// 它应该删除列表a中的所有值，这些值在列表b中保持其顺序。
//     Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//     Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//     Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//     Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
// 传入两个数组a,b
// 如果a为空，直接输出空
// 如果b为空，直接输出b
// a只会删除b中有的元素且是所有值
// 解题
// 先取出b中的第一个值（为空直接输出a），遍历a的值进行比对，如果相同则删除a中的值
// 以此类推，b遍历完后输出a
// function arrayDiff(a, b) {
//   if (b == null) {
//     return a;
//   }
//   else {
//     for (var c = 0; c < b.length; c++){
//       for (var d = 0; d < a.length; d++){
//         if (a[d] == b[c]) {
//           a.splice(d, 1);
//           d--;//删除之后，数组长度会减小，所以d需要减一，使数组正确的遍历
//         }
//       }
//     }
//     return a
//   }
// }

// 优化
function arrayDiff(a, b) {
    for (var c = 0; c < b.length; c++){
      for (var d = 0; d < a.length; d++){
        a[d] == b[c] ? (a.splice(d, 1), d--) :true;
      }
    }
    return a
  }
var i = [2,4,4,4]
var j = [1, 4]
console.log(arrayDiff(i, j)) 