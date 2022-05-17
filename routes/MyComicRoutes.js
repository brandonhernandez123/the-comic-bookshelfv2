const Router = require('express').Router()

const MyComics = require('../controllers/MyComics')

Router.get('/mycomics', MyComics.getShelf)

Router.get('/shelvedcomic/:comic_id', MyComics.getSingleComic)

Router.delete('/deletecomic/:comic_id', MyComics.deleteComic)

Router.post('/addcomic', MyComics.newComic)

module.exports = Router
