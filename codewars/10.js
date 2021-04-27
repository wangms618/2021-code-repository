// 给定两个数组a和b，写一个函数comp(a，b)(or comp some(a，b))，检查这两个数组是否有“相同”的元素，具有相同的乘法性。
// “相同”的意思是，在这里，b中的元素是a平方中的元素，不管顺序如何。
//  两个数组，第一个数组每位平方，然后将其与第二个数组进行对比，如果有相等的，第二个数组删除对应元素，遍历完成，数组为空则得出为true
function comp(array1, array2) {
  if (!array1 || !array2) { //判断是否是空数组，因为没判断这里导致我一直得不到正确答案，切记要判断
    return false
  }
  for (let i = 0; i < array1.length; i++){
    array1[i] = array1[i] * array1[i];
  }
  for (let i = 0; i < array1.length; i++){
    for (let j = 0; j < array2.length; j++){
      if (array1[i] == array2[j])
      {
        array2.splice(j, 1);
        break;
        }
    }
  }
  if (array2.length==0) {
    return true
  } else {
    return false
  }
}
a1 = [1,2,4,5]
a2 = [1,4,25,16]
comp(a1, a2)