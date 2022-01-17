import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((willDelete) => {
      if (willDelete) {
        const url = `http://localhost:5000/courses/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
              const remainingCourse = courseList.filter(
                (course) => course._id !== id,
              )
              setCourseList(remainingCourse)
            }
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
// Bio-Chemistry	4 years	6050 USD	Henry
