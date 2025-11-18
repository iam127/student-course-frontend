import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import StudentForm from './components/StudentForm';
import CourseForm from './components/CourseForm';
import EnrollmentManager from './components/EnrollmentManager';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1>Sistema de Gestión Universitaria</h1>
            <ul className="nav-menu">
              <li><Link to="/">Estudiantes</Link></li>
              <li><Link to="/courses">Cursos</Link></li>
              <li><Link to="/enrollments">Matrículas</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/edit/:id" element={<StudentForm />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/new" element={<CourseForm />} />
            <Route path="/courses/edit/:id" element={<CourseForm />} />
            <Route path="/enrollments" element={<EnrollmentManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
