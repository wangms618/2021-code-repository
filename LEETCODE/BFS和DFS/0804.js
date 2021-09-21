var subsets = function (nums) {
  let len = nums.length
  let res = [
    []
  ]
  for (let i = 0; i < len; i++) {
    let len2 = res.length
    for (let j = 0; j < len2; j++) {
      let tem = [...res[j],nums[i]]
      res.push(tem)
    }
  }
  return res
}

let arr = [1, 2, 3]
console.log(subsets(arr));

// 每次遍历都取到之前的结果res，用一个变量tem将其存储（防止破坏原结果），tem里每个元素都加入当前遍历的数值，再将tem放入res中