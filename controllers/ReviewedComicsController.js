const { reviewedComics, Users } = require('../models')

const getReviews = async (req, res) => {
  try {
    const review = await reviewedComics.findAll({
      include: [
        {
          model: 'Users',
          attributes: ['username']
        }
      ]
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const newReview = async (req, res) => {
  try {
    const review = reviewedComics.create(req.body)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req, res) => {
  try {
    await reviewedComics.destroy({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review has been deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const updateReview = async (req, res) => {
  try {
    const update = await reviewedComics.update({
      where: { id: req.params.review_id },
      returning: true
    })
    res.send(update)
  } catch (error) {
    throw error
  }
}

async function getSingleReview(req, res) {
  try {
    const review = await reviewedComics.findbyPk(req, params, review_id, {
      include: [
        {
          model: Users,
          attributes: ['username']
        }
      ]
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getReviews,
  newReview,
  deleteReview,
  updateReview,
  getSingleReview
}
