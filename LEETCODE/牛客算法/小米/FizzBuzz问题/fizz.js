function fizz(n) {
  if (n == 0) return 0
  // 开始遍历
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      return 'FizzBuzz'
    } else if (i % 3 == 0) {
      return 'Fizz'
    } else if (i % 5 == 0) {
      return 'Buzz'
    } else {
      return i
    }
  }
}
fizz(15)