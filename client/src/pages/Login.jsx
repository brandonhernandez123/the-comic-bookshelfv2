import React, {useState} from 'react'
import { SignInUser } from '../services/auth'
import { Nav } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


const Login = (props) => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    let history = useHistory()


    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
     try {
          e.preventDefault()
          const payload = await SignInUser(formValues)
          setFormValues({ email: '', password: '' })
          props.setUser(payload)
          props.toggleAuthenticated(true)
          window.location.reload(true)
        } catch (error) {
         alert('login unsucessfull, please try again')
     }
    }



    return(
<div>
    <h2>Welcome to The ComicBook shelf</h2>
   
        
<div className='login'>
   
    <Form className='loginform' onSubmit={handleSubmit}> 
    <h2>Sign in</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email'  onChange={handleChange} value={formValues.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={formValues.password} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button disabled={!formValues.email || !formValues.password} variant="primary" type="submit">
    Sign in
  </Button> 
  <p> Not Signed up yet? click <Nav.Link href='/register'>Here</Nav.Link> </p>
</Form>
  
  
</div>
</div>
    )
}


export default Login