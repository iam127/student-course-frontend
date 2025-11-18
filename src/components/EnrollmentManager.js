import React, { useState, useEffect } from 'react';
import { studentService, courseService } from '../services/api';

function EnrollmentManager() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [studentsRes, coursesRes] = await Promise.all([
        studentService.getAll(),
        courseService.getAll()
      ]);
      setStudents(studentsRes.data);
      setCourses(coursesRes.data);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const handleEnroll = async () => {
    if (!selectedStudent || !selectedCourse) {
      alert('Selecciona un estudiante y un curso');
      return;
    }

    try {
      await studentService.enrollInCourse(selectedStudent.id, selectedCourse.id);
      alert('Matrícula realizada con éxito');
      loadData();
      setSelectedStudent(null);
      setSelectedCourse(null);
    } catch (error) {
      console.error('Error al matricular:', error);
      alert('Error al realizar la matrícula');
    }
  };

  const handleUnenroll = async (studentId, courseId) => {
    if (window.confirm('¿Deseas desmatricular al estudiante de este curso?')) {
      try {
        await studentService.unenrollFromCourse(studentId, courseId);
        alert('Desmatrícula realizada con éxito');
        loadData();
      } catch (error) {
        console.error('Error al desmatricular:', error);
      }
    }
  };

  return (
    <div>
      <h2>Gestión de Matrículas</h2>
      
      <div className="card enrollment-section">
        <h3>Nueva Matrícula</h3>
        <div className="enrollment-grid">
          <div>
            <h4>Selecciona Estudiante:</h4>
            <div className="select-box">
              {students.map(student => (
                <div
                  key={student.id}
                  className={`select-item ${selectedStudent?.id === student.id ? 'selected' : ''}`}
                  onClick={() => setSelectedStudent(student)}
                >
                  <strong>{student.name}</strong>
                  <br />
                  <small>{student.email}</small>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4>Selecciona Curso:</h4>
            <div className="select-box">
              {courses.map(course => (
                <div
                  key={course.id}
                  className={`select-item ${selectedCourse?.id === course.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCourse(course)}
                >
                  <strong>{course.name}</strong>
                  <br />
                  <small>Código: {course.code} | Créditos: {course.credits}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleEnroll} 
          className="btn btn-success"
          style={{ marginTop: '1rem' }}
        >
          Matricular
        </button>
      </div>

      <div className="card enrollment-section">
        <h3>Matrículas Actuales</h3>
        <table>
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Curso</th>
              <th>Código</th>
              <th>Créditos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student =>
              student.courses.map(course => (
                <tr key={`${student.id}-${course.id}`}>
                  <td>{student.name}</td>
                  <td>{course.name}</td>
                  <td>{course.code}</td>
                  <td>{course.credits}</td>
                  <td>
                    <button
                      onClick={() => handleUnenroll(student.id, course.id)}
                      className="btn btn-danger"
                    >
                      Desmatricular
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrollmentManager;