import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className="navHeader py-2">
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="img-fluid headerImg"
            src="https://i.ibb.co/XzhwM6B/download-removebg-preview.png"
            alt="Vu University"
          />
          <h1 className="headerName">
            <span className="text-danger">VU</span> University
          </h1>
        </div>
        <p className="fw-bold text-uppercase">
          Creating a Successful and Solution-Oriented Mindset
        </p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-4">
        <div class="container-fluid">
          <h3 className="text-light">
            <span className=" text-danger">ADMIN</span> Dashboard
          </h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="d-flex align-items-center navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase">
              <li class="nav-item">
                <Link to="/courseList" className="ms-4 text-decoration-none">
                  Course List
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/studentList" className="ms-4 text-decoration-none">
                  Student List
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/courseAdd" className="ms-4 text-decoration-none">
                  Course Add
                </Link>
              </li>
              <Navbar.Text className="ms-4">
                Admin signed in: <span className="fw-bold">Noyon</span>
              </Navbar.Text>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
