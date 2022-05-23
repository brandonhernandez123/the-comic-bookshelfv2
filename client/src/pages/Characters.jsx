import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CHARACTER_COMIC_VINE, COMIC_VINE_API, format} from '../globals'
import {Row, Col, Container, Button, Card} from 'react-bootstrap'

const Characters = () => {

    const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.get(`${CHARACTER_COMIC_VINE}${COMIC_VINE_API}${format}&filter=name:${searchQuery}&limit=50`)
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


  useEffect(() => {
      async function showCharacters(){
          const res = await axios.get(`${CHARACTER_COMIC_VINE}${COMIC_VINE_API}${format}&filter=name:${searchQuery}&limit=50`)
      }
  })

console.log(searchResults)
  

    return(
        <div>
        <h1>Search Characters</h1>
        <form onSubmit={getSearchResults}>
        <input type='text' placeholder='Ex: Spider-Man, Batman, Iron-Man ETC' value={searchQuery}
        onChange={getResults}
         />
         <button type='submit'>Search</button>
        </form>
        <div>
            {searchResults.map((hero) => (
                <Container fluid>
                    <Row>

                    <Card varient='secondary' style={{ width: '18rem', backgroundColor: 'darkblue', color: 'white', margin: '20px auto' }}>
                        <Card.Img variant="top" src={hero.image.medium_url} alt={hero.name} />
                             <Card.Body>
                                <Card.Title>{hero.name}</Card.Title>
                                    <Card.Text>
                                               {hero.deck}
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                    </Card>
                       
                    </Row>
                </Container>
            ))}
        </div>
        </div>
       
    )
}

export default Characters