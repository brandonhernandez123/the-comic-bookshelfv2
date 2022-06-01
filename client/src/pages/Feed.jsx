import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'
import AddToShelf from '../components/AddToShelf'

const Feed = (props) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function Reviews() {
      const res = await axios.get(`${BASE_URL}/reviews`)
      setReviews(res.data)
    }
    Reviews()
  }, [])
  console.log(props.user)
  return (
    <Container fluid className="feed">
      <h1 className="reviewtitle">Review feed</h1>
      <br />
      {reviews.map((review, index) => (
        <Row key={index}className="reviewfeed">
          <Card id="reviewcard">
            <Card.Img
              variant="top"
              src={review.image}
              height={800}
              width={250}
            />
            <Card.Body>
              <Card.Title>
                {review.title} reviewed by {review.User.username}
              </Card.Title>
              <Card.Text>
                {review.review} | Rating: {review.rating} out of 10
              </Card.Text>
              {props.authenticated && props.user ? ( <AddToShelf title={review.title} image={review.image} description={review.description} user={props.user} authenticated={props.authenticated} id={props.user.id} index={index} />) : (<p>Sign in to add to shelf</p>)}
             
            </Card.Body>
          </Card>
        </Row>
      ))}
    </Container>
  )
}

export default Feed
