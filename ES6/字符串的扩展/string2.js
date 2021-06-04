// 2. 字符串的遍历器接口
for (let item of 'foozzz') {
  console.log(item);
}
// f
// o
// o
// z
// z
// z

let text = String.fromCodePoint(0x20BB7);
console.log(text); // 𠮷
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}
// "𠮷"