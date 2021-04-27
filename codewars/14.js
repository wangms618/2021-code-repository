// 它必须以一个hashtag(#).
// 所有单词的第一个字母都必须大写。
// 如果最终结果超过140个字符，则必须返回false.
// 如果输入或结果是空字符串，则必须返回false.
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""   

var arr = "Hello    world"
arr = arr.split(" ")
console.log(arr)