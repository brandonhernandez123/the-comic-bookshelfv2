import React,{useState} from 'react'
import {RegisterUser} from '../services/auth'
import { Form, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


const iState = {
    username: '',
    email: '',
    password: ''
  
}
const Register = (props) => {
const [formValues, setFormValues] = useState({
   username: '',
    email: '',
    password: ''
  
})

const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})

}

const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password
      
    })
    setFormValues(iState)
    props.history.push('/login')
}

    return(
    <div> 
       
    
    <h2>Welcome to The ComicBook shelf</h2>
   
        
<div className='login'>
   
    <Form className='loginform' onSubmit={handleSubmit}> 
    <h2>Register</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email'  onChange={handleChange} value={formValues.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Create username" name='username'  onChange={handleChange} value={formValues.username} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={formValues.password} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button disabled={!formValues.email || !formValues.password} variant="primary" type="submit">
    Register
  </Button> 
 
</Form>
  
  
</div>
</div>
    )
}


export default Register