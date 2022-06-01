import React, {useState} from 'react'
import { SignInUser } from '../services/auth'
import { Nav } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


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
    <h2>Sign in</h2>
    <form className='form' onSubmit={handleSubmit}>
        
    <input type="email" name='email' onChange={handleChange} value={formValues.email}  placeholder="Email"/>
   
    <input type="password" name='password' value={formValues.password} onChange={handleChange} placeholder="Password"/>
    <button disabled={!formValues.email || !formValues.password}> Sign in </button>
    </form>
   <p> Not Signed up yet? click <Nav.Link href='/register'>Here</Nav.Link> </p>
</div>
</div>
    )
}


export default Login