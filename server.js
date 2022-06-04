const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const MyComicRoutes = require('./routes/MyComicRoutes')
const ReviewedComics = require('./routes/ReviewRoutes')
const UserRoutes = require('./routes/UserRoutes')
const AuthRoutes = require('./routes/AuthRoutes')

const PORT = process.env.PORT || 3001
const app = express()

const options = {
  target: 'https://comicvine.gamespot.com/api/', // target host with the same base path
  changeOrigin: true // needed for virtual hosted sites
}

const comicvineapiproxy = createProxyMiddleware(options)

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, '/client/build')))
app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use(
  '/api',
  MyComicRoutes,
  ReviewedComics,
  UserRoutes,
  AuthRoutes,
  comicvineapiproxy
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
