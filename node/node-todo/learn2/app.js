const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()
app.get('/', (req, ress, next) => {
  // 用superagent抓取目标页面的内容
  superagent.get('https://cnodejs.org/')
    .end((err, res) => {
      if (err) {
        return next(err)
      }
      let $ = cheerio.load(res.text)
      let items = []
      // 拿到
      $('#topic_list .topic_title').each((index, element) => {
        // console.log($(element));
        let $element = $(element)
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        })
      })
      ress.send(items)
    })
})
app.listen(3000)