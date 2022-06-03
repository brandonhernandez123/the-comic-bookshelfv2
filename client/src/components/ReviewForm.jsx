import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useHistory } from 'react-router-dom'

const ReviewForm = (props) => {
  let history = useHistory()

  const [reviewForm, setReviewForm] = useState({
    userId: props.user.id,
    title: props.title,
    image: props.image,
    description: props.description,
    review: '',
    rating: 0
  })

  const onClick = async () => {
    try {
      await axios.post(`${BASE_URL}/newreview`, reviewForm)
      history.push('/')
    } catch (error) {
      alert('Error: Review failed to post, please try again.')
      throw error
    }
  }

  const handleChangeReview = (e) => {
    setReviewForm({ ...reviewForm, review: e.target.value })
  }

  const handleChangeRating = (e) => {
    setReviewForm({ ...reviewForm, rating: e.target.value })
  }

  return (
    <div>
      <form onSubmit={() => onClick(props.index)}>
        <input
          type="text"
          required
          placeholder="Write review"
          name="review"
          id="reviewform"
          onChange={handleChangeReview}
        />
        <label for="rating">Rating (between 1 and 10):</label>
        <input
          type="range"
          min={1}
          max={10}
          placeholder="Rate out of 10"
          name="rating"
          onChange={handleChangeRating}
        />
        <button id="submitbtn" required type="submit" placeholder="submit">
          Submit{' '}
        </button>
      </form>
    </div>
  )
}

export default ReviewForm
