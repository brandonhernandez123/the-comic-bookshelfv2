import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import ReviewForm from '../components/ReviewForm'
import UpdateReview from '../components/UpdateReview'

const Shelf = (props) => {
  const [getProfile, setProfile] = useState([])
  const [myComics, setMyComics] = useState([])
  const [myReviews, setMyReviews] = useState([])
  const [modalShow, setModalShow] = useState(false)

  // Method for getting profile info username, email.
  useEffect(() => {
    async function fetchProfile() {
      const res = await axios.get(`${BASE_URL}/profile/${props.user.id}`)
      setProfile(res.data)
      setMyComics(res.data.myComics)
      setMyReviews(res.data.reviewedComics)
    }
    fetchProfile()
  }, [])
  console.log(myReviews)

  //   delete Method for Comics in shelf

  const RemoveComic = async (index) => {
    try {
      let id = `${myComics[index].id}`
      await axios.delete(`${BASE_URL}/deletecomic/${id}`)
      alert('Comic removed from shelf')
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  const RemoveReview = async (index) => {
    try {
      let id = `${myReviews[index].id}`
      await axios.delete(`${BASE_URL}/deletereview/${id}`)
      alert('Review removed from shelf')
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  return (
    <div className='shelfwhole'>
      <br />
      <br />
      <br />

      <h2 className="shelfcontent">
        Welcome to your shelf {getProfile.username}
      </h2>
      <Container fluid id="shelf">
        <Row>
          {myComics.map((comic, index) => (
            <Col className="shelfcard">
              {myComics.length <= 0 ? (
                <h2 color="white">You do not have any comics in your shelf.</h2>
              ) : (
                <div>
                  <h4 className="shelftitle">{comic.title}</h4>
                  <img
                    src={comic.image}
                    alt={comic.title}
                    height={450}
                    width={300}
                  />

                  <p id="description">Description: {comic.description}</p>
                  <button onClick={() => RemoveComic(index)}>
                    Remove Comic
                  </button>
                  <Accordion
                    className="bg-danger"
                    id="accordion"
                    defaultActiveKey="1"
                  >
                    <Accordion.Item id="accordion" eventKey="0">
                      <Accordion.Header id="accordion">
                        Review this comic
                      </Accordion.Header>
                      <Accordion.Body id="accordion">
                        <ReviewForm
                          user={props.user}
                          image={comic.image}
                          description={comic.description}
                          title={comic.title}
                          index={comic.index}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Container>

      <br />

      <Container fluid className="shelfreview">
        <h1 color="white">My Reviews</h1>
        <Row>
          {myReviews.map((review, index) => (
            <Col className="reviewcard">
              <h3 className="shelftitle">{review.title}</h3>
              <img width={200} height={300} src={review.image} />
              <p id="description">
                {review.review} /n Rating: {review.rating} out of 10
              </p>
              <button onClick={() => RemoveReview(index)}>
                    Delete Review
                  </button>
              <Accordion
                className="bg-danger"
                id="accordion"
                defaultActiveKey="1"
              >
                <Accordion.Item id="accordion" eventKey="0">
                  <Accordion.Header id="accordion">
                    Update your review
                  </Accordion.Header>
                  <Accordion.Body id="accordion">
                    <UpdateReview
                      title={review.title}
                      index={review.index}
                      image={review.image}
                      description={review.description}
                      review={review.review}
                      rating={review.rating}
                      id={review.id}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Shelf
