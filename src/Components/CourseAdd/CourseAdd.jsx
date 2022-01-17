import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import swal from 'sweetalert'
import './CourseAdd.css'

const CourseAdd = () => {
  const courseNameRef = useRef()
  const courseDurationRef = useRef()
  const courseFeeRef = useRef()
  const courseInstructorRef = useRef()

  const handleCourseAdd = (e) => {
    e.preventDefault()
    const courseName = courseNameRef.current.value
    const courseDuration = courseDurationRef.current.value
    const courseFee = courseFeeRef.current.value
    const courseInstructor = courseInstructorRef.current.value

    const courseInfo = {
      courseName,
      courseDuration,
      courseFee,
      courseInstructor,
    }

    fetch('http://localhost:5000/courses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(courseInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal({
            title: 'Congratulation!',
            text: 'Your course has been added!',
            icon: 'success',
            button: 'Ok!',
          })
        }
        e.target.reset()
      })
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
        <h2 className="text-danger">Course Add</h2>
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
      </div>
      <Container className="w-50">
        <form className="py-2 submitFrom" onSubmit={handleCourseAdd}>
          <input ref={courseNameRef} placeholder="Course Name" />
          <select
            className="form-select my-2"
            ref={courseDurationRef}
            id="inputGroupSelect01"
          >
            <option value="4 years">4 years</option>
            <option value="1.5 years">1.5 years</option>
          </select>
          <input ref={courseFeeRef} placeholder="Course Fee" />
          <input ref={courseInstructorRef} placeholder="Course Instructor" />
          <Button type="submit" variant="outline-dark">
            <img
              src="https://img.icons8.com/color-glass/32/000000/filled-sent.png"
              alt="..."
            />
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}

export default CourseAdd
