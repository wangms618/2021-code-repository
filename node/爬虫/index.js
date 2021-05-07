const https = require('https')
const cheerio = require('cheerio') // 在node中帮助我们做获取dom结构的插件
const fs = require('fs')
https.get('https://movie.douban.com/top250', (res) => {
  let html = ''
  res.on('data', (chunk) => {
    html += chunk
  })
  // res.on() 监听事件
  res.on('end', () => {
    const $ = cheerio.load(html)
    let allFilms = []
    $('li .item').each(function() {
      const title = $('.hd .title', this).text()
      const star = $('.bd .star .rating_num', this).text()
      const pic = $('.pic img',this).attr('src')
      allFilms.push({ title,star,pic })
    })
    console.log(allFilms)
    fs.writeFile('./file.json', JSON.stringify(allFilms), (err) => {
      if (!err) {
        console.log('文件写入完成')
      }
    })
  })
})


// const server = http.createServer((req, res) => {
//   res.end('你好,世界');
// })
// server.listen(3000)