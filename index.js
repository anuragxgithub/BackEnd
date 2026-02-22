require('dotenv').config() // or import 'dotenv/config' if you're using ES6
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('anuragxtwt')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login here')
})

app.get('/youtube', (req, res) => {
  res.send('youtube.com')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
