import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="bg-dark mt-4 pt-2 text-white">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid footerImg"
                src="https://i.ibb.co/XzhwM6B/download-removebg-preview.png"
                alt="Vu University"
              />
              <h1 className="headerName">
                <span className="text-danger">VU</span> University
              </h1>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="..."
                className="me-2"
              />
              <img
                src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                alt="..."
                className="me-2"
              />
              <img
                src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
                alt="..."
                className="me-2"
              />
            </div>
          </div>
          <div className="pb-2">
            Copyright 2022 VU of Bangladesh. All Rights Reserved.
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
