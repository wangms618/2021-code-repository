const http = require('http');
const querystring = require('querystring')
let server = http.createServer((req, res) => {
  const url = req.url
  const query = querystring.parse(url.split('?')[1])
  const { name, age, callback } = query // const callback = query.callback
  const data = {
    name: name,
    age: age
  }
  // JSON.stringify 将对象转成字符串
  // JSON.parse() 将字符串转回对象
  // getMsg(data)
  res.end(`${callback}('${JSON.stringify(data)}')`)
})
server.listen(3000, () => {
  console.log('服务已启动');
})