import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const SingleStudent = ({ students }) => {
  const { name, groupName, gender } = students
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{groupName}</td>
        <td>{gender}</td>
        <td>
          <Button variant="outline-info" onClick={() => setModalShow(true)}>
            <img
              src="https://img.icons8.com/color/28/000000/info--v1.png"
              alt="..."
            />
          </Button>
        </td>
      </tr>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
  /* Model */
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>
              Student Name: <span className="text-success">{name}</span>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SingleStudent
