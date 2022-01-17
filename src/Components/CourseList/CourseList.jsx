import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import swal from 'sweetalert'
import './courseList.css'
import SingleCourse from './SingleCourse/SingleCourse'

const CourseList = () => {
  const [courseList, setCourseList] = useState([])

  useEffect(() => {
    const url = 'http://localhost:5000/courses'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourseList(data))
  }, [])

  const handleDeleteCourse = (id) => {
    swal({
      title: 'Are you sure?',
      text:
        'Once deleted, you will not be able to recover this imaginary course!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `http://localhost:5000/courses/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal('Poof! Your imaginary course has been deleted!', {
                icon: 'success',
              })
              const remainingCourses = courseList.filter(
                (course) => course._id !== id,
              )
              setCourseList(remainingCourses)
            }
          })
      } else {
        swal('Your imaginary course is safe!', {
          icon: 'info',
        })
      }
    })
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
        <h2 className="text-danger">Course List</h2>
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
      </div>
      <Container className="mt-4">
        <Table striped responsive bordered hover size="sm">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Duration</th>
              <th>Course Fee</th>
              <th>Course Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courseList.map((courses) => (
              <SingleCourse
                key={courses._id}
                courses={courses}
                handleDeleteCourse={handleDeleteCourse}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default CourseList
