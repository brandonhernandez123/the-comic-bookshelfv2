import React,{useState, useEffect} from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'


const Shelf = (props) => {
    const [getProfile, setProfile] = useState([])

    useEffect(() => {
        async function fetchProfile(){
            const res = await axios.get(`${BASE_URL}/profile/${props.user.id}`)
            setProfile(res.data)
        }
        fetchProfile()
    }, [])
    console.log(getProfile)
    return(
        <Container fluid id='shelf'>
            <div className='shelfcontent'>
                <h3>Welcome to your shelf {}</h3>
                {getProfile.map((profile, index) => (
                    <Row>
                        <h5>My account information</h5>
                        <p>Username:</p>
                    </Row>
                ))}
            </div>
        </Container>
    )
}


export default Shelf;