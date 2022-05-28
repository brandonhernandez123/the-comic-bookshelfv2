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
    console.log(getProfile)
    return(
        <Container fluid id='shelf'>
            
            <h2 className='shelfcontent'>Welcome to your shelf {getProfile.username}</h2>
            <Row>
                {myComics.map((comic, index) => (
                 <Col className='shelfcard'>
                    
                    <div>
                        <h4>{comic.title}</h4>
                        <img src={comic.image} alt={comic.title} height={300} width={200} />
                        <p id='description'>Description: {comic.description}</p>
                    </div>
                </Col>  
                ))}
                
                
            </Row>
          
        </Container>
    )
}


export default Shelf;