const http = require('http')
const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('袁总很可爱')
})

server.listen(8080, () => {
  console.log('服务器运行在http://127.0.0.1:8080');
})