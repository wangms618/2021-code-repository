// 最高得分词
// 给定一串单词，您需要找到得分最高的单词。
// 一个单词的每个字母根据其在字母表中的位置得分：a = 1, b = 2, c = 3等。
// 您需要将得分最高的单词作为字符串返回。
// 如果两个单词得分相同，则返回原始字符串中最早出现的单词。
// 所有的字母都是小写的，所有的输入都是有效的。
// map
const letter = {//map结构
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26
}
// 传入字符串数组，字符串每个单词再转为数组，遍历计算每个单词的大小，按照顺序放入一个数组中，所有单词大小得出来后进行对比，取最大的下标带入x字符串中得到
function high(x) {
  // split() 方法用于把一个字符串分割成字符串数组。
  x = x.split(" ");
  // 存储下标
  let index = 0;
  // 存对应的最大值
  let max = 0;
  // 创建一个数组用来存每个单词对应的值
  let nums = Array(x.length).fill(0)
  // 遍历
  for (let i = 0; i < x.length; i++){
    for (let j = 0; j < x[i].length; j++){
      nums[i] += letter[x[i][j]];
    }
  }
  // 设第一个值最大
  for (let i = 0; i < x.length; i++){
    if (i == 0) {
    max = nums[0]; continue;
    }
    if (nums[i] > max) {
      // 如果后面的值大于最大值，则替换最大值与下标
      index = i;
      max = nums[i];
    }
  }
    return x[index]
}
high('man i need a taxi up to ubud')








// describe("Example tests",_=>{
//   Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//   Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
//   Test.assertEquals(high('take me to semynak'), 'semynak'); 
//   Test.assertEquals(high('aa b'), 'aa');
//   Test.assertEquals(high('b aa'), 'b');
//   Test.assertEquals(high('bb d'), 'bb');
//   Test.assertEquals(high('d bb'), 'd');
//   Test.assertEquals(high('aaa b'), 'aaa');
//   });