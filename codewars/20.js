// 让我们假设你的公司刚刚从大学雇佣了你的朋友，并付给你推荐奖金。太棒了！为了庆祝，你带着你的团队去隔壁可怕的潜水酒吧，用推荐奖金购买并建造你能买到的最大的三维啤酒罐金字塔。然后可能喝下那些啤酒，因为我们假装今天也是星期五。

// 一个啤酒罐金字塔将在每个水平的数量平方-1罐在最高层，4个在第二个，9个在下一个，16，25.

// 函数，以返回完全考虑到以下参数，您可以制作啤酒罐金字塔的级别：

// 你的推荐奖金

// 啤酒罐的价格
// beeramid(1500, 2); // should === 12
// 1500 / 2 = 750
// 1+4+9+25+36+49+64+81+100+121+144 = 644<750
//  1+4+9+25+36+49+64+81+100+121+144+169 >750
// 所以求得12

var beeramid = function (bonus, price) {
  let count = parseInt(bonus / price)
  let level = 0 // 层级
  let nums = 0 // 金字塔总数
  while (nums < count) {
    level++
    nums += level * level
    if (nums > count) {
      console.log(--level);
    }
  }
  console.log(level);
}
beeramid(11, 2)

