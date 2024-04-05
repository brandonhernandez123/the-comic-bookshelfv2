import React, { useState } from 'react'
import { RegisterUser } from '../services/auth'
import { Form, Button } from 'react-bootstrap'

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
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await RegisterUser({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password
      })
      setFormValues(iState)
      alert('Account has been succesfully created!')
      window.location.href = '/login'
    } catch (error) {
      alert('Account creation failed, please try again.')
    }
  }

  return (
    <div>
      <h2>Welcome to The ComicBook shelf</h2>

      <div className="login">



        <Form className="loginform" onSubmit={handleSubmit}>


          <h1>Register is Currently under Maintainence</h1>
          {/* <h2>Register</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={formValues.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Create username"
              name="username"
              onChange={handleChange}
              value={formValues.username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            disabled={!formValues.email || !formValues.password}
            variant="primary"
            type="submit"
          >
            Register
          </Button> */}
          <p>You can still search comics and Characters!</p>
        </Form>
      </div>
    </div>
  )
}

export default Register
