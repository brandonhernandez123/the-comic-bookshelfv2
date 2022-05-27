import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = ({ authenticated, user, handleLogOut }) => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="bottom" id="navbar">
      <Container>
        <Navbar.Brand style={{ color: 'white' }} href="/">
          The Comic Bookshelf
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: 'white' }} href="/comics">
              Comics
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/characters">
              Characters
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{ color: 'white' }} href="/shelf">
              My Shelf
            </Nav.Link>
          </Nav>
          <Nav>
            {
              authenticated && user ? (
                <Nav.Link
                  style={{ color: 'white' }}
                  href="/login"
                  onClick={handleLogOut}
                >
                  Sign out
                </Nav.Link>
              ) : (
                <Nav.Link href="/login" style={{color: 'white'}}>Sign in</Nav.Link>
              )
              //   <Nav.Link eventKey={2} href="/register">
              //   Register
              // </Nav.Link>
            }
            {authenticated ? null : (
              <Nav.Link style={{ color: 'white' }} href="/register">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
