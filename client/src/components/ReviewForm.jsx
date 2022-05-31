import React,{useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const ReviewForm = (props) => {
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
        } catch (error) {
            alert('Error: Review failed to post, please try again.')
            throw error
        }
    }

    const handleChangeReview = (e) => {
        setReviewForm({...reviewForm,review: e.target.value})
    }

    const handleChangeRating = (e) => {
        setReviewForm({...reviewForm, rating: e.target.value})
    }

    console.log(reviewForm.review, reviewForm.rating)
    

    console.log(reviewForm)

    return(
        <div>
            <form onSubmit={() => onClick(props.index)}>
                <input type='review' placeholder='Write review' name='review'  onChange={handleChangeReview} />
                <input type='number' placeholder='Rate out of 10' name='rating'   onChange={handleChangeRating} />
                <button type='submit' />
            </form>
        </div>
    )
}


export default ReviewForm;