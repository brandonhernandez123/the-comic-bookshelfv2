import React, { useState } from 'react'
import axios from 'axios'
import { CHARACTER_COMIC_VINE, COMIC_VINE_API, format } from '../globals'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Characters = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.get(
        `${CHARACTER_COMIC_VINE}${COMIC_VINE_API}${format}&filter=name:${searchQuery}&limit=15`
      )
      setSearchResults(res.data.results)
      toggleSearched(true)
      setSearchQuery('')
    } catch (error) {
      throw error
    }
  }

  const getResults = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="characters">
      <h1>Search Characters</h1>
      <form className="charactersearchform" onSubmit={getSearchResults}>
        <input
          id="charactersearch"
          type="text"
          placeholder="Ex: Spider-Man, Batman, Iron-Man ETC"
          value={searchQuery}
          onChange={getResults}
          required
        />
        <button id="charactersearchbutton" type="submit">
          Search
        </button>
      </form>

      <h4>
        Want to learn more about your favorite characters? Here is the place to
        do so!
      </h4>
      <div>
        {searchResults.map((hero, index) => (
          <Container key={hero.id} fluid>
            <Row className="herocard">
              <Col>
                <h2>{hero.name}</h2>
                <Image
                  fluid
                  height={300}
                  width={250}
                  src={hero.image.small_url}
                  alt={hero.name}
                />
              </Col>
              <Col>
                <p id="herodeck">{hero.deck}</p>
                <div
                  className="herodescription"
                  dangerouslySetInnerHTML={{ __html: hero.description }}
                />
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    </div>
  )
}
export default Characters
