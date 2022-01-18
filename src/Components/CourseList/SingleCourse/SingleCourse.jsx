import React from 'react'
import ReactTooltip from 'react-tooltip'
import './SingleCourse.css'

const SingleCourse = ({ courses, handleDeleteCourse }) => {
  const {
    _id,
    courseName,
    groupName,
    courseDuration,
    courseFee,
    courseInstructor,
  } = courses
  return (
    <>
      <tr>
        <td>{courseName}</td>
        <td>{groupName}</td>
        <td>{courseDuration}</td>
        <td>{courseFee} USD</td>
        <td>Sir.{courseInstructor}</td>
        <td>
          <img
            data-tip
            data-for="delete"
            onClick={() => handleDeleteCourse(_id)}
            className="hoverEffect"
            src="https://img.icons8.com/color/34/000000/delete-user-data.png"
            alt="..."
          />
        </td>
      </tr>
      {/* Tooltip Use */}
      <ReactTooltip id="delete" type="error" effect="solid">
        <span>Delete</span>
      </ReactTooltip>
    </>
  )
}

export default SingleCourse
