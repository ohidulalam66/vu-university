import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import swal from 'sweetalert'
import './courseList.css'
import SingleCourse from './SingleCourse/SingleCourse'
import Loading from '../Loading/Loading'

const CourseList = () => {
  const [courseList, setCourseList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = 'http://localhost:5000/courses'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourseList(data))
    setIsLoading(false)
  }, [])

  const handleDeleteCourse = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Do you want to Delete your Course?',
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
              swal('Poof! Your Course has been Deleted!', {
                icon: 'success',
              })
              const remainingCourses = courseList.filter(
                (course) => course._id !== id,
              )
              setCourseList(remainingCourses)
            }
          })
      } else {
        swal('Your Course has been Saved!', {
          icon: 'info',
        })
      }
    })
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
        <h2 className="text-danger">
          Course List ({courseList.length} Subjects)
        </h2>
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
      </div>
      <Container className="mt-4">
        <Table striped responsive bordered hover size="sm">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Group Name</th>
              <th>Course Duration</th>
              <th>Course Fee</th>
              <th>Course Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <Loading />
          ) : (
            <tbody>
              {courseList.map((courses) => (
                <SingleCourse
                  key={courses._id}
                  courses={courses}
                  handleDeleteCourse={handleDeleteCourse}
                />
              ))}
            </tbody>
          )}
        </Table>
      </Container>
    </>
  )
}

export default CourseList
