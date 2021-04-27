const date = '2019-01-02';
// var date1 = date.split("-")
// console.log(date1[0]+'年'+date1[1]+'月'+date1[2]+'日')

// const reg = /\d{4}/;  // /d代表数字 {4}表示四个数字
// const reg = /(\d{4})-(\d{2})-(\d{2})/; 
// console.log(reg.exec(date))


// const str = '11111aabbccdef';
// const reg = /[a-z]{3}$/; //[a-z]取范围内的字母 {3}连续三个  g全局
// console.log(reg.exec(str))


// let str = 'aaaccc13033235608';
// const reg = /^\d{11}$/; //头和尾数11个都是数字
// console.log(reg.test(str))  //返回false

// let str = '13033235608zzzz';
// const reg = /^\d{11}/; //头和尾数11个都是数字
// console.log(reg.test(str))  //返回true

// let str = 'aaaa13033235608';
// const reg = /^\d{11}/; //头和尾数11个都是数字
// console.log(reg.test(str))  //返回false

// let str = '13033235608zzzz';
// const reg = /\d{11}$/; //头和尾数11个都是数字
// console.log(reg.test(str))  //返回false

// let str = 'zzzz13033235608';
// const reg = /\d{11}$/; //头和尾数11个都是数字
// console.log(reg.test(str))  //返回true

const emailReg = /[0-9a-z-_]+@[0-9a-z-_]+\.com/;
