import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CHARACTER_COMIC_VINE, COMIC_VINE_API, format} from '../globals'
import {Row, Col, Container, Button, Card} from 'react-bootstrap'
import CharacterModal from '../components/CharacterModal'


const Characters = () => {
    const [modalShow, setModalShow] = useState(false);
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
            {searchResults.map((hero, index) => (
                <Container fluid>
                    
                    <Col>
                    <Card key={hero.index} varient='secondary' style={{ width: '18rem', backgroundColor: 'darkblue', color: 'white', margin: '20px auto' }}>
                        <Card.Img variant="top" src={hero.image.medium_url} alt={hero.name} />
                             <Card.Body>
                                <Card.Title>{hero.name}</Card.Title>
                                    <Card.Text>
                                               {hero.deck}
                                    </Card.Text>
                                    <Card.Text><a href={hero.api_detail_url}>You can read more info on {hero.name} here</a></Card.Text>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>More Details</Button>
                                    <CharacterModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    key={hero.index}
                                    name={hero.name}
                                    deck={hero.deck}
                                     />
                                            
                                        
                            </Card.Body>
                    </Card>
                      </Col> 
                    
                </Container>
            ))}
        </div>
       
        </div>
       
    )
}

export default Characters