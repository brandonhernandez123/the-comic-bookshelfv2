import React,{useState} from 'react'
import {RegisterUser} from '../services/auth'
import { Button } from 'react-bootstrap'
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
        <h2>Welcome to BoxerGram</h2>
        <h4>Register</h4>
        <div>
   
        
<div className='login'>
    
    <form className='form' onSubmit={handleSubmit}>
    <input type='text' name="username" value={formValues.username} placeholder="username" onChange={handleChange}/>
    

    <input type="email" name="email" value={formValues.email}  placeholder="Email" onChange={handleChange}/>
   
    
    <input type="password" name="password" value={formValues.password} placeholder="Password" onChange={handleChange}/>
    <Button  variant='danger' type="submit"  className="submit">Register</Button>
    </form>
   
</div>
</div>
    </div>
    )
}


export default Register