let users = [
  { name: 'xhs', url: 'http://xhs.com' },
  { name: 'lol', url: 'http://lol.com' },
  { name: 'baidu', url: 'http://baidu.com' }
]
let p = []
for (let i = 0; i < users.length; i++) {
  p.push('<li><a href="')
  p.push(users[i].url)
  p.push('">')
  p.push(users[i].name)
  p.push('</a></li>')
}
console.log(p.join(''));