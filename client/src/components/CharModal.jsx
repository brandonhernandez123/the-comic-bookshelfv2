import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const CharModal = (props) => {
  return (
    <Modal {...props} size="lg" centered className="charmodal">
      <Modal.Header className="chartitle" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="charinfo">
        <p>
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </p>
      </Modal.Body>
      <Modal.Footer className="charinfo">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharModal
