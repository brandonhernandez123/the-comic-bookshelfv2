const Router = require('express').Router()

const ReviewedComicsController = require('../controllers/ReviewedComicsController')

Router.get('/reviews', ReviewedComicsController.getReviews)
Router.get('/singlereview/:review_id', ReviewedComicsController.getSingleReview)
Router.post('/newreview', ReviewedComicsController.newReview)
Router.delete('/deletereview/:review_id', ReviewedComicsController.deleteReview)
Router.put('/updatereview/:review_id', ReviewedComicsController.updateReview)

module.exports = Router
