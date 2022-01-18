import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './CourseCard.css'

const CourseCard = ({ studentCourses }) => {
  const {
    courseName,
    groupName,
    courseDuration,
    courseFee,
    courseInstructor,
  } = studentCourses
  return (
    <>
      <Col>
        <Card className="h-100 bg-dark text-white courseCard">
          <Card.Body>
            <Card.Title className="text-success">{courseName}</Card.Title>
            <Card.Text>
              <h6>
                <span>
                  <b className="text-danger">Group:</b> {groupName}
                </span>
              </h6>
              <p>
                <span>
                  <b className="text-danger">Course Duration:</b>{' '}
                  {courseDuration}
                </span>
                <br />
                <span>
                  <b className="text-danger">Course Fee:</b> {courseFee} USD
                </span>
                <br />
                <span>
                  <b className="text-danger">Course Instructor:</b>{' '}
                  {courseInstructor}
                </span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CourseCard
