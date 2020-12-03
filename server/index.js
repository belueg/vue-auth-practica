const express = require('express')
const app = express()
const port = 3200
const chalk = require('chalk')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const bodyParser = require('body-parser')
const cors = require('cors')
const faker = require('faker')
app.use(cors()).use(bodyParser.json())
const DB = require('./db.json')
const jwt = require('jsonwebtoken')
require('dotenv').config()
// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], users: [] }).write()

app.post('/tokenInfo', authToken, (req, res) => {
  res.json(req.user)
})

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.get('/posts', authToken, (req, res) => {
  try {
    console.log(req.user)
    const posts = db.get('posts').value()
    return res.json(posts)
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 34 ~ app.post ~ error', error)
    return res.status(500).json({ error: 'Unexpected error.' })
  }
})

function authToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  } catch (error) {
    return res.sendStatus(401)
  }
}
app.listen(port, () =>
  console.log(chalk.blue.bold(`Main server mounted on port ${port}!`))
)
