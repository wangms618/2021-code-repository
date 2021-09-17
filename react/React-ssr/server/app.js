const express = require('express')
const app = new express()
app.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>hello</title>
    </head>
    <body>
      <h1>hello</h1>
      <p>world</p>
    </body>
    </html>
    `
  )
})

app.listen(3001, () => {
  console.log('成功');
})