import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'

const UpdateReview = (props) => {
  const [updateForm, setUpdateForm] = useState({
    review: '',
    rating: null
  })

  const updatedReview = async () => {
    try {
      await axios.put(`${BASE_URL}/updatereview/${props.id}`, updateForm)
    } catch (error) {
      throw error
    }
  }

  const handleChangeReview = (e) => {
    setUpdateForm({ ...updateForm, review: e.target.value })
  }

  const handleChangeRating = (e) => {
    setUpdateForm({ ...updateForm, rating: e.target.value })
  }

  return (
    <Container>
      <form onSubmit={() => updatedReview(props.index)}>
        <label>Review</label>
        <input
          type="text"
          required
          placeholder={props.review}
          id="reviewform"
          name="review"
          onChange={handleChangeReview}
        />
        <br />
        <label>Rating: </label>
        <input
          type="number"
          required
          min={1}
          max={10}
          placeholder={props.rating}
          name="rating"
          onChange={handleChangeRating}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Container>
  )
}

export default UpdateReview
