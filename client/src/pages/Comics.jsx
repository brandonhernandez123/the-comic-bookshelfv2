import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { SearchbyIssue, COMIC_VINE_API, format, MARVEL_COMIC_SEARCH, MARVEL_API, MARVEL_ORDERBY, MARVEL_COMIC_SEARCH_NODATE } from '../globals'
import { Container, Card, Button } from 'react-bootstrap'





const Comics = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [startdateQuery, setStartDateQuery] = useState(null)
    const [enddateQuery, setEndDateQuery] = useState(null)
    const [getMarvelComics, setMarvelComics] = useState([])
    const [marvelSearch, setMarvelSearch] = useState('')
    const [marvelStartDate, setMarvelStartDate] = useState(null)
    const [marvelEndDate, setMarvelEndDate] = useState(null)
    const getSearchResults = async (e) => {
        try {
            e.preventDefault()
            if (enddateQuery && startdateQuery != null) {
            const res = await axios.get(`${SearchbyIssue}${COMIC_VINE_API}${format}&filter=name:${searchQuery},cover_date:${startdateQuery}|${enddateQuery}&limit=50`)
            setSearchResults(res.data.results)
            toggleSearched(true)
            setSearchQuery('')
            } else {
                const res = await axios.get(`${SearchbyIssue}${COMIC_VINE_API}${format}&filter=name:${searchQuery}&limit=50`)
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

    console.log(searchQuery)
    console.log(searchResults)
    console.log(startdateQuery)
    console.log(enddateQuery)

    // MARVEL SEARCH
    const FetchMarvel = async (e) => {
        try {
            e.preventDefault()
            if (marvelStartDate && marvelEndDate != null){
            const res = await axios.get(`${MARVEL_COMIC_SEARCH}${marvelStartDate},${marvelEndDate}&title=${marvelSearch}${MARVEL_ORDERBY}${MARVEL_API}`)
            setMarvelComics(res.data.data.results)
            } else {
                const res = await axios.get(`${MARVEL_COMIC_SEARCH_NODATE}${marvelSearch}${MARVEL_ORDERBY}${MARVEL_API}`)
                setMarvelComics(res.data.data.results)
            }
        } catch (error) {
            alert('try searching by the exact name of comic series ex: The Amazing Spider-Man')
            throw error
        }
    }

    const setMarvelQuery = (e) => {
        setMarvelSearch(e.target.value)
    }

    const setMarvelDateStart = (e) => {
        setMarvelStartDate(e.target.value)
    }

    const setMarvelDateEnd = (e) => {
        setMarvelEndDate(e.target.value)
    }

    console.log('getmarvelcomics',getMarvelComics)

    return (
      <div className="comicpage">
        <h1>Hello World</h1>
        <form onSubmit={getSearchResults}>
          <input
            type="text"
            placeholder="search comics"
            value={searchQuery}
            onChange={getResults}
            required='true'
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
        <form onSubmit={FetchMarvel}>
        <input
            type="text"
            placeholder="search comics"
            value={marvelSearch}
            onChange={setMarvelQuery}
            required='true'
          />
          <input
            type="date"
            placeholder="date"
            value={marvelStartDate}
            onChange={setMarvelDateStart}
          />
          <input
            type="date"
            placeholder="date"
            value={marvelEndDate}
            onChange={setMarvelDateEnd}
          /> 
          <button type='submit'>Search Marvel Comics</button>
        </form>
        <Container className="grid" fluid>
          {searchResults.map((comic, index) => (
            <div className="comiccard">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={comic.image.small_url} />
                <Card.Body className='comiccard'>
                  <Card.Title>Title:{comic.name} </Card.Title>
                  
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
             
            </div>
          ))}
          {getMarvelComics.map((marvel, index) => (
              <div>
                   <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${marvel.thumbnail.path}/portrait_incredible.jpg`} />
                <Card.Body className='comiccard'>
                  <Card.Title>Title:{marvel.title} </Card.Title>
                  
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              </div>
          ))}
        </Container>
      </div>
    )
}


export default Comics;