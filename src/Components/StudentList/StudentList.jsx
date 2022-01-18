/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import SingleStudent from './SingleStudent/SingleStudent'
import './StudentList.css'

const StudentList = () => {
  const [studentList, setStudentList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = './student.json'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudentList(data))
    setIsLoading(false)
  }, [])
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
        <h2 className="text-danger">Student List</h2>
        <img src="https://img.icons8.com/color/48/000000/ours.png" alt="..." />
      </div>
      <Container className="mt-4">
        <Table striped responsive bordered hover size="sm">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Group Name</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <Loading />
          ) : (
            <tbody>
              {studentList.map((students) => (
                <SingleStudent key={students._id} students={students} />
              ))}
            </tbody>
          )}
        </Table>
      </Container>
    </>
  )
}

export default StudentList
