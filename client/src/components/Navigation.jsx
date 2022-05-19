import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'


const Navigation = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='bottom'>
        <Container>
        <Navbar.Brand href="/">The Comic Bookshelf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/comics">Comics</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/shelf">My Shelf</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Sign In / Sign out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;