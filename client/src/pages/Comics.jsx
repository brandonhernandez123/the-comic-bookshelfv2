import React, { useState, useContext } from 'react'
import axios from 'axios'
import {
  SearchbyIssue,
  COMIC_VINE_API,
  format,
  MARVEL_COMIC_SEARCH,
  MARVEL_API,
  MARVEL_ORDERBY,
  MARVEL_COMIC_SEARCH_NODATE
} from '../globals'
import { Container, Card, Button, Row, Col, Accordion } from 'react-bootstrap'
import AddToShelf from '../components/AddToShelf'
import ComicSearch from '../components/ComicSearch'

const Comics = ({authenticated, user, setUser, checkToken, toggleAuthenticated}) => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [startdateQuery, setStartDateQuery] = useState(null)
  const [enddateQuery, setEndDateQuery] = useState(null)
  const [getMarvelComics, setMarvelComics] = useState([])
  const [marvelSearch, setMarvelSearch] = useState('')
  const [marvelStartDate, setMarvelStartDate] = useState(null)
  const [marvelEndDate, setMarvelEndDate] = useState(null)
  console.log('authenticated', authenticated, 'user:', user)
  
  

  const getSearchResults = async (e) => {
    try {
      e.preventDefault()
      if (enddateQuery && startdateQuery != null) {
        const res = await axios.get(
          `${SearchbyIssue}${COMIC_VINE_API}${format}&filter=name:${searchQuery},cover_date:${startdateQuery}|${enddateQuery}&limit=50`
        )
        setSearchResults(res.data.results)
        toggleSearched(true)
        setSearchQuery('')
        
      } else {
        const res = await axios.get(
          `${SearchbyIssue}${COMIC_VINE_API}${format}&filter=name:${searchQuery}&limit=50`
        )
        setSearchResults(res.data.results)
        toggleSearched(true)
        setSearchQuery('')
        
      }
    } catch (error) {
      alert('could not find a comic with that name')
      throw error
    }
  }

  const getResults = (e) => {
    setSearchQuery(e.target.value)
  }

  const setStartDate = (e) => {
    setStartDateQuery(e.target.value)
  }

  const setEndDate = (e) => {
    setEndDateQuery(e.target.value)
  }


  // MARVEL SEARCH
  const FetchMarvel = async (e) => {
    try {
      e.preventDefault()
      if (marvelStartDate && marvelEndDate != null) {
        const res = await axios.get(
          `${MARVEL_COMIC_SEARCH}${marvelStartDate},${marvelEndDate}&title=${marvelSearch}${MARVEL_ORDERBY}${MARVEL_API}`
        )
        setMarvelComics(res.data.data.results)
      } else {
        const res = await axios.get(
          `${MARVEL_COMIC_SEARCH_NODATE}${marvelSearch}${MARVEL_ORDERBY}${MARVEL_API}`
        )
        setMarvelComics(res.data.data.results)
      }
    } catch (error) {
      alert(
        'try searching by the exact name of comic series ex: The Amazing Spider-Man'
      )
      throw error
    }
  }
  let portrait = '/portrait_incredible.jpg'
  const setMarvelQuery = (e) => {
    setMarvelSearch(e.target.value)
  }

  const setMarvelDateStart = (e) => {
    setMarvelStartDate(e.target.value)
  }

  const setMarvelDateEnd = (e) => {
    setMarvelEndDate(e.target.value)
  }





//Accordion











  return (
    <div className="comicpage">
      <h1>Search Comics to add to your Shelf</h1>
      <Row className='searchaccord'>
       

      
        <Accordion  defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ComicSearch eventKey="0">Search DC, DarkHorse Etc</ComicSearch>
        </Card.Header>
        <Accordion.Collapse className='accordion' eventKey="0">
          <Card.Body>

 <Col className='dcsearch'>
        <form onSubmit={getSearchResults}>
        <input
          type="text"
          placeholder="search comics"
          value={searchQuery}
          onChange={getResults}
          required="true"
        />
        <input
          type="date"
          placeholder="date"
          value={startdateQuery}
          onChange={setStartDate}
        />
        <input
          type="date"
          placeholder="date"
          value={enddateQuery}
          onChange={setEndDate}
        />
        <button type="submit">Search</button>
      </form>
        </Col>

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ComicSearch eventKey="1">Search Marvel Comics</ComicSearch>
        </Card.Header>
        <Accordion.Collapse  className='accordion' eventKey="1">
          <Card.Body>
  <Col>
         <form onSubmit={FetchMarvel}>
           <h2>Search <span id='marvel'>Marvel's</span> database</h2>
        <input
          type="text"
          placeholder="ex; The Amazing Spider-Man, Fantastic Four, Deadpool, Captain America, Star Wars"
          value={marvelSearch}
          onChange={setMarvelQuery}
          required="true"
          id='searchcomicinput'
          color='red'
        />
        <br/>
        <br/>
        <h5> You have the option of filtering by Release date (both dates must be filled)</h5>
        <p>example: To retrieve a more recent The Amazing Spider-Man issue you would search The Amazing Spider-Man - 05/01/2022 - 06/01/2022</p>
        <input
          type="date"
          placeholder="date"
          value={marvelStartDate}
          onChange={setMarvelDateStart}
        />
        ---
        <input
          type="date"
          placeholder="date"
          value={marvelEndDate}
          onChange={setMarvelDateEnd}
        />
        <br/>
        <button type="submit">Search Marvel Comics</button>
      </form>
        
        </Col>


          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

      </Row>
      
     
      <Container id="comicpage" fluid>
        {searchResults.map((comic, index) => (
          <Row>
            <Col className='shelfcard'>
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={comic.image.small_url} />
              <Card.Body className="comiccard">
                <Card.Title>Title:{comic.name} </Card.Title>
                {authenticated && user ? (<AddToShelf
                  title={comic.name}
                  image={comic.image.small_url}
                  description={comic.description}
                  index={index}
                  user={user}
                  id={user.id}
                  authenticated={authenticated}
                
                /> ) : <p>Sign in to add comics to shelf</p>}
               
                
              </Card.Body>
            </Card>
            </Col>
          </Row>
        ))}
        {getMarvelComics.map((marvel, index) => (
          <Row>
            <Col className='shelfcard'>
            <Card style={{ width: '10rem' }}>
              <Card.Img
                variant="top"
                src={`${marvel.thumbnail.path}/portrait_incredible.jpg`}
              />
              <Card.Body className="comiccard">
                <Card.Title>Title:{marvel.title} </Card.Title>
                {authenticated && user ? ( <AddToShelf
                  title={marvel.title}
                  image={`${marvel.thumbnail.path}${portrait}`}
                  description={marvel.description}
                  index={index}
                  id = {user.id}
                />) : (<p>Sign in to add comics to shelf</p>)}
               
              </Card.Body>
            </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default Comics
