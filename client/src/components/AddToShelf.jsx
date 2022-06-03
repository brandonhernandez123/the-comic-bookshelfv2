import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../globals'

const AddToShelf = ({
  title,
  description,
  image,
  user,
  authenticated,
  id,
  index
}) => {
  const [postShelf, setShelf] = useState({
    title: title,
    description: description,
    image: image,
    userId: id
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

  return (
    <div>
      <button type="submit" onClick={() => addComic(index)}>
        Add to shelf
      </button>
    </div>
  )
}

export default AddToShelf
