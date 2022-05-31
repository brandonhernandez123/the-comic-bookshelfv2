import React,{useState} from 'react'


const ReviewForm = (props) => {
    return(
        <div>
            <form>
                <input type='review' placeholder='Write review' />
                <input type='number' placeholder='Rate out of 10' />
                <button type='submit' />
            </form>
        </div>
    )
}


export default ReviewForm;