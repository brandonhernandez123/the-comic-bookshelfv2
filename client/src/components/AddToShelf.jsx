import axios from 'axios'
import React, {useState} from 'react'
import { BASE_URL } from '../globals'


const AddToShelf = (props) => {
    const [postShelf, setShelf] = useState({
        title: props.title,
        description: props.description,
        image: props.image,
        userId: 1
    })

    const addComic = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/addcomic`, postShelf)
            alert('comic successfully added, view under my comics')

        } catch (error) {
            alert('comic not added')
            throw error
        }
    }
    console.log(postShelf)
    return(
        <div>

            <button type='submit' onClick={() => addComic(props.index)}>Add to shelf</button>
        </div>
    )
}

export default AddToShelf;