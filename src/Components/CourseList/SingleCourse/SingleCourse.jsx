import React from 'react'
import { Button } from 'react-bootstrap'
import './SingleCourse.css'

const SingleCourse = ({ courses, handleDeleteCourse }) => {
  const {
    _id,
    courseName,
    courseDuration,
    courseFee,
    courseInstructor,
  } = courses
  return (
    <>
      <tr>
        <td>{courseName}</td>
        <td>{courseDuration}</td>
        <td>{courseFee} USD</td>
        <td>{courseInstructor}</td>
        <td>
          <Button
            variant="outline-danger"
            onClick={() => handleDeleteCourse(_id)}
          >
            <img
              src="https://img.icons8.com/color/28/000000/delete-user-data.png"
              alt="..."
            />
          </Button>
        </td>
      </tr>
    </>
  )
}

export default SingleCourse
