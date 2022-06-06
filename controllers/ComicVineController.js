const axios = require('axios')

const API_KEY = process.env.COMIC_VINE_API

async function searchIssue(req, res) {
  const searchQuery = req.query.searchQuery

  await axios
    .get(
      `https://www.comicvine.com/api/issues?api_key=${API_KEY}&format=json&filter=name:${searchQuery}&limit=50`
    )
    .then(function (response) {
      res.json(response.data.results)
    })
    .catch((err) => res.send(err))
}

async function searchIssueWDate(req, res) {
  const searchQuery = req.query.searchQuery
  const startDate = req.query.startDate
  const endDate = req.query.endDate
  await axios
    .get(
      `https://www.comicvine.com/api/issues?api_key=${API_KEY}&format=json&filter=name:${searchQuery}&cover_date:${startDate}|${endDate}&limit=50`
    )
    .then(function (response) {
      res.json(response.data.results)
    })
    .catch((err) => res.send(err))
}

const searchCharacter = async (req, res) => {
  const searchQuery = req.query.searchQuery

  await axios
    .get(
      `https://www.comicvine.com/api/characters?api_key=${API_KEY}&format=json&filter=name:${searchQuery}&limit=15`
    )
    .then(function (response) {
      res.json(response.data.results)
    })
    .catch((err) => res.send(err))
}

module.exports = { searchIssue, searchIssueWDate, searchCharacter }
