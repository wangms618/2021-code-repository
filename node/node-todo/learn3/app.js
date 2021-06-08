const eventproxy = require('eventproxy')
const superagent = require('superagent')
const cheerio = require('cheerio')

const url = require('url')
const cnodeUrl = 'https://cnodejs.org/'
// 向这个地址去请求
superagent.get(cnodeUrl).end((err, res) => {
  if (err) return console.error(cnodeUrl)
  // console.log(res);
  let topicUrls = []
  let $ = cheerio.load(res.text)

  $('#topic_list .topic_title').each((idx, element) => {
    let $element = $(element)
    let href = url.resolve(cnodeUrl, $element.attr('href'))
    topicUrls.push(href)
  })
  // console.log(topicUrls);
  let ep = new eventproxy()
  // 命令 ep 重复监听 topicUrls.length
  ep.after('topic_html', topicUrls.length, (topics) => {
    // topics 是个数组，包含了40次 ep.emit('topic_html',pair)
    topics = topics.map((topicPair) => {
      // console.log(topicPair);
      let topicUrl = topicPair[0]
      let topicHtml = topicPair[1]
      let $ = cheerio.load(topicHtml)
      return ({
        title: $('.topic_full_title').text().trim(),
        href: topicUrl,
        comment1:$('.reply_content p').eq(0).text().trim()
      })
    })
  })

  // 触发40次请求
  topicUrls.forEach((topicUrl) => {
    superagent.get(topicUrl).end((err, res) => {
      console.log(topicUrl);
      ep.emit('topic_html',[topicUrl,res.text])
    })
  })

})


