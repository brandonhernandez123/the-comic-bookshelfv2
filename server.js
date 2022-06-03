const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const MyComicRoutes = require('./routes/MyComicRoutes')
const ReviewedComics = require('./routes/ReviewRoutes')
const UserRoutes = require('./routes/UserRoutes')
const AuthRoutes = require('./routes/AuthRoutes')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', MyComicRoutes, ReviewedComics, UserRoutes, AuthRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
