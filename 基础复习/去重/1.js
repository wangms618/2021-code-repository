function unique(arr) {
  // 如果不是数组
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  // 放入初始值
  let res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false;
        break
      }
    }
    if (flag) {
      res.push(arr[i])
    }
  }
  return res
}