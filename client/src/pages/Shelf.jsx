import React,{useState, useEffect} from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'


const Shelf = (props) => {
    const [getProfile, setProfile] = useState([])
    const [myComics, setMyComics] = useState([])


    // Method for getting profile info username, email.
    useEffect(() => {
        async function fetchProfile(){
            const res = await axios.get(`${BASE_URL}/profile/${props.user.id}`)
            setProfile(res.data)
            setMyComics(res.data.myComics)
        }
        fetchProfile()
    },[] )
    return(
    <div>  
        <h2 className='shelfcontent'>Welcome to your shelf {getProfile.username}</h2>
        <Container fluid id='shelf'>
            
            
            <Row>
                {myComics.map((comic, index) => (
                 <Col className='shelfcard'>
                    {myComics.length <= 0 ? ( <h2 color='white'>You do not have any comics in your shelf.</h2>) : (<div>
                        <h4 className='shelftitle'>{comic.title}</h4>
                        <img src={comic.image} alt={comic.title} height={450} width={300} />
                        <p id='description'>Description: {comic.description}</p>
                    </div>)}
                   
                </Col>  
                ))}
                
                
            </Row>
          
        </Container>
        </div>
    )
}


export default Shelf;