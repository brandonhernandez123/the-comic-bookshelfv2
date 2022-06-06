const Router = require('express').Router()
const ComicVineController = require('../controllers/ComicVineController')

Router.get('/issues', ComicVineController.searchIssue)
Router.get('/issuesdate', ComicVineController.searchIssueWDate)
Router.get('/characters', ComicVineController.searchCharacter)

module.exports = Router
