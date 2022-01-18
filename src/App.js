import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentList from './Components/StudentList/StudentList'
import CourseList from './Components/CourseList/CourseList'
import CourseAdd from './Components/CourseAdd/CourseAdd'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courseList" element={<CourseList />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/courseAdd" element={<CourseAdd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
