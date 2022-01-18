import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
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
          <Button variant="outline-info" onClick={() => setModalShow(id)}>
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
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://img.icons8.com/color/48/000000/info--v1.png"
              alt="..."
            />
            <h3>Student Detail</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Name: <span className="text-success">{name}</span>
          </h5>
          <p>
            <b>C GPA:</b> <span className="text-success">{cgpa}</span>
            <br />
            <b>Passing Year:</b>{' '}
            <span className="text-success">{passingYear}</span>
            <br />
            <b>Preferred Group:</b>{' '}
            <span className="text-success">{groupName}</span>
          </p>
          {gotCourses.map((studentCourses) => (
            <CourseCard
              key={studentCourses._id}
              studentCourses={studentCourses}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SingleStudent
