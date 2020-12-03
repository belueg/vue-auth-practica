const express = require('express')
const app = express()
const port = 4000
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
const chalk = require('chalk')
// Set some defaults (required if your JSON file is empty)
let refreshTokens = []

app.post('/token', (req, res) => {
  const refreshToken = req.headers.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ email: user.email })
    return res.json({ accessToken })
  })
})

app.post('/login', (req, res) => {
  try {
    const { email, password } = req.body

    const userExists = db.get('users').find({ email }).value()

    if (!userExists) return res.json({ error: 'Invalid credentials' })

    if (userExists.password != password)
      return res.json({ error: 'Invalid credentials' })

    if (userExists.password == password) {
      const accessToken = generateAccessToken({ email })

      const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN)
      // res.json({ accessToken, refreshToken })

      refreshTokens.push(refreshToken)

      return res.json({
        msg: 'Successfully logged in!',
        accessToken,
        refreshToken
      })
    }
  } catch (err) {
    console.log('🚀 ~ file: authServer.js ~ line 50 ~ app.post ~ err', err)
    res.sendStatus(401)
  }
})

function generateAccessToken({ email }) {
  return jwt.sign({ email }, process.env.ACCESS_TOKEN, {
    expiresIn: '2h'
  })
}
app.post('/register', (req, res) => {
  try {
    const { email, password } = req.body
    const userExists = db.get('users').find({ email }).value()
    if (userExists) {
      console.log('el usuario ya existe!')
      return res.status(403).json({
        error: 'user already exists'
      })
    }
    db.get('users').push({ email, password }).write()
    return res.json({ message: 'succesfully saved' })
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 34 ~ app.post ~ error', error)
    return res.status(500).json({ error: 'Unexpected error.' })
  }
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.listen(port, () =>
  console.log(chalk.magenta.bold(`Main server mounted on port ${port}!`))
)
