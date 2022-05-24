import React,{useState, useEffect} from 'react'
import {Modal, Button, Container} from 'react-bootstrap'


const CharacterModal = (props) => {
    return(
        <Container>
             <Modal
      {...props}
      size="xl"
      fullscreen= 'lg-down'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p>
          {props.deck}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </Container>
    )
}

export default CharacterModal;