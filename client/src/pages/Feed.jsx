import React, { useState, useEffect } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
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
  return (
    <Container fluid className="feed">
      <h1 className="reviewtitle">Review feed</h1>
      <br />
      <h2 id="feedwelcome">Welcome to the Comic Bookshelf</h2>
      <h3 id="feedwelcome">
        Here you view other user's thoughts and reviews on comics they have
        read, from here you can add those comics to you shelf
      </h3>
      <p id="feedwelcome">
        {' '}
        Go to <a href="/comics">Comics</a> to search and add to your shelf.
      </p>
      {reviews.map((review, index) => (
        <Row key={review.id} className="reviewfeed">
          <Card id="reviewcard">
            <Card.Img
              variant="top"
              src={review.image}
              height={800}
              width={250}
              className="reviewcardimage"
              alt={review.title}
            />
            <Card.Body>
              <Card.Title>
                {review.title} reviewed by {review.User.username}
              </Card.Title>
              <Card.Text>REVIEW: {review.review}</Card.Text>
              <Card.Text>RATING: {review.rating} OUT OF 10</Card.Text>
              {props.authenticated && props.user ? (
                <AddToShelf
                  title={review.title}
                  image={review.image}
                  description={review.description}
                  user={props.user}
                  authenticated={props.authenticated}
                  id={props.user.id}
                  index={index}
                />
              ) : (
                <p>Sign in to add to shelf</p>
              )}
            </Card.Body>
          </Card>
        </Row>
      ))}
    </Container>
  )
}

export default Feed
