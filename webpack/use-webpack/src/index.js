import style from './index.css'

function comp() {
  const el = document.createElement('div')
  el.innerHTML = '<i>Hello World</i>'
  console.log(style);
  return el
}

console.log([1, 2, 3].findIndex(x => x === 4));
// 在字符串开头填充十个空格
console.log('abc',padStart(10));
document.body.appendChild(comp())