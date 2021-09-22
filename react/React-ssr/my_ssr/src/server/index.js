import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import Home from '../pages/home'

const app = new express()
// 把home组件编译成虚拟dom结构
const content = renderToString(<Home />)
app.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
    </html>
    `
  )
})

app.listen(3001, () => {
  console.log('成功');
})