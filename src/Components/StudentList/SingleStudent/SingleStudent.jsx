import React, { useEffect, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import CourseCard from '../CourseCard/CourseCard'
import './SingleStudent.css'

const SingleStudent = ({ students }) => {
  const { id, name, passingYear, cgpa, groupName, gender } = students
  const [modalShow, setModalShow] = useState(false)
  const [courseList, setCourseList] = useState([])

  useEffect(() => {
    const url = 'http://localhost:5000/courses'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourseList(data))
  }, [])

  const gotCourses = courseList.filter(
    (courses) => courses?.groupName === groupName,
  )

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{groupName}</td>
        <td className="text-uppercase">{gender}</td>
        <td>
          <img
            data-tip
            data-for="info"
            className="hoverEffect"
            onClick={() => setModalShow(id)}
            src="https://img.icons8.com/color/34/000000/info--v1.png"
            alt="..."
          />
        </td>
      </tr>

      {/* Tooltip Use */}
      <ReactTooltip id="info" type="info" effect="solid">
        <span>Info.</span>
      </ReactTooltip>

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
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://img.icons8.com/color/48/000000/info--v1.png"
              alt="..."
            />
            <h3>Student Information</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Name: <span className="text-success">{name}</span>
          </h5>
          <p>
            <b>C. GPA:</b> <span className="text-success">{cgpa}</span>
            <br />
            <b>Passing Year:</b>{' '}
            <span className="text-success">{passingYear}</span>
            <br />
            <b>Preferred Group:</b>{' '}
            <span className="text-success">{groupName}</span>
          </p>
          <p className="fs-3 fw-lighter">{name} choice subjects:</p>
          <hr />
          <Row xs={1} md={3} className="g-4">
            {gotCourses.map((studentCourses) => (
              <CourseCard
                key={studentCourses._id}
                studentCourses={studentCourses}
              />
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SingleStudent
