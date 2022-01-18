import React from 'react'
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-4">
        <div className="container-fluid">
          <h3 className="text-light">
            <span className=" text-danger">ADMIN</span> Dashboard
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item">
                <Link
                  to="/courseList"
                  className="ms-4 text-decoration-none px-2 py-2 navLink"
                >
                  Course List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/studentList"
                  className="ms-4 text-decoration-none px-2 py-2 navLink"
                >
                  Student List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/courseAdd"
                  className="ms-4 text-decoration-none px-2 py-2 navLink"
                >
                  Course Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
