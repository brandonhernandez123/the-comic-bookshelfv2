import React from 'react'
import { useParams } from 'react-router-dom';




const SingleHero = ({hero}) => {

    const { name } = useParams()
    return(
       <>
       {hero.filter(char => char.name === name).map((char, index) => (
           <div>
               <h1>{char.name}</h1>
           </div>
       ))}
       </>
    )
}


export default SingleHero;