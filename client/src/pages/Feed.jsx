import React, {useState, useEffect} from 'react'
import {Container, Row, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import {BASE_URL} from '../globals'

const Feed = (props) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function Reviews(){
            const res = await axios.get(`${BASE_URL}/reviews`)
            setReviews(res.data)
        }
        Reviews()
    }, [])

    console.log(reviews)

    return(
        <Container fluid className='feed'>
            <h1 className='reviewtitle'>Review feed</h1>
            <br/>
           {reviews.map((review) => (
               <Row className='reviewfeed'>
                 <Card id='reviewcard'>
                    <Card.Img variant="top" src={review.image} />
                    <Card.Body>
                    <Card.Title>{review.title} reviewed by {review.User.username}</Card.Title>
                    <Card.Text>
                            {review.review} | Rating: {review.rating} out of 10
                    </Card.Text>
                    <Button variant="primary">Add to shelf</Button>
                    </Card.Body>
                </Card>
                 
               </Row>
           ))}
        </Container>
    )
}

export default Feed;