let http = require('http')
let server = http.createServer()
server.on('request', (req, res) => {
  console.log('浏览器正在朝我发请求');
})

server.listen(3000, () => {
  console.log('服务器已启动');
})