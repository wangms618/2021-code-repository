// 给定连续奇数的三角形
// 根据行索引(从索引1开始)计算该三角形的行和
// for循环循环所有数字
// 第一行 一个1 第二行 两个4 第三行3个9 第四行 四个16 第五行 5个25  每行的平方乘以行数 即每行的立方 
// 根据上面分析需要根据n来确定行数
function rowSumOddNumbers(n) {
    return Math.pow(n,3)
}
console.log(rowSumOddNumbers(42))