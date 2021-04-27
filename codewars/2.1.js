

function likes(names) {
  //模板
  var templates = [
    'no one likes this',
    '{name} likes this',//{}占位符
    '{name} and {name} like this',// Jack rose
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'    
  ]
  var idx = Math.min(names.length, 4);//min() 方法可返回指定的数字中带有最低值的数字（即names数组长度）赋值给idx,idx用来决定用templates的第几句
  // console.log(idx, templates[idx]);
  // 将选择好的templates中对应的句子传入replace()
  // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.lenght;
  })
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));