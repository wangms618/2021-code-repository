function bar() {
  var c = { name: '浩楠' }
  var d = c
  c.name = "杜班长"
  console.log(c);
  console.log(d);
}
bar()

// 深拷贝和浅拷贝