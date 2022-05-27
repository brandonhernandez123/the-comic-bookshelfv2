import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CHARACTER_COMIC_VINE, COMIC_VINE_API, format } from '../globals'
import { Row, Col, Container, Button, Image } from 'react-bootstrap'
import CharModal from '../components/CharModal'

const Characters = () => {
  const [modalShow, setModalShow] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [marvelCharacters, SetMarvel] = useState([])
  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.get(
        `${CHARACTER_COMIC_VINE}${COMIC_VINE_API}${format}&filter=name:${searchQuery}&limit=3`
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

 const getMarvel = async (event) => {
   try {
     event.preventDefault()
     const res = await axios.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-Man&orderBy=name&limit=10&apikey=411f30e793bd61e8cd96ac17f835698d')
     SetMarvel(res.data.data.results)

   } catch (error) {
     throw error
   }
 }

 function onClick(index){
  

  setModalShow(true, index)
 }

  console.log(searchResults)
  console.log(marvelCharacters)

  return (
    <div className='characters'>
      <h1>Search Characters</h1>
      <form onSubmit={getSearchResults}>
        <input
          id='charactersearch'
          type="text"
          placeholder="Ex: Spider-Man, Batman, Iron-Man ETC"
          value={searchQuery}
          onChange={getResults}
          required
        />
        <button id='charactersearchbutton'type="submit">Search</button>
      </form>
      <form onSubmit={getMarvel}>

        <button type='submit'>Marvel Characters</button>
      </form>
      
      <h4>Want to learn more about your favorite characters? Here is the place to do so!</h4>
      <div>
        {searchResults.map((hero, index) => (
          <Container key={index} fluid>
            <Row className="herocard">
              <Col>
                <h2>{hero.name} {index}</h2>
                <Image fluid src={hero.image.small_url} alt={hero.name} />
              </Col>
              <Col>
                <p id="herodeck">{hero.deck}</p>
                <Button variant="primary" onClick={() => console.log(index)}>
                  Read more about {hero.name}{' '}
                </Button>
                <CharModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  name={hero.name}
                  description={hero.description}
                  image={hero.image.screen_url}
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
