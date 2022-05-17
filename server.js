const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const MyComicRoutes = require('./routes/MyComicRoutes')
const ReviewedComics = require('./routes/ReviewRoutes')
const UserRoutes = require('./routes/UserRoutes')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', MyComicRoutes, ReviewedComics, UserRoutes)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
