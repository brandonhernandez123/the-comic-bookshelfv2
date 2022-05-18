const { myComics, Users } = require('../models')

const getShelf = async (req, res) => {
  try {
    const comics = await myComics.findAll({
      include: [
        {
          model: Users
        }
      ]
    })
    res.send(comics)
  } catch (error) {
    throw error
  }
}

const getSingleComic = async (req, res) => {
  try {
    const comic = await myComics.findByPk(req.params.comic_id)
    res.send(comic)
  } catch (error) {
    throw error
  }
}

const deleteComic = async (req, res) => {
  try {
    await myComics.destroy({ where: { id: req.params.comic_id } })
    res.send({
      msg: 'Comic has been removed from your shelf',
      payload: req.params.comic_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const newComic = async (req, res) => {
  try {
    const comic = await myComics.create(req.body)
    res.send(comic)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getShelf,
  getSingleComic,
  deleteComic,
  newComic
}
