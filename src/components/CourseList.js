import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courseService } from '../services/api';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const response = await courseService.getAll();
      setCourses(response.data);
    } catch (error) {
      console.error('Error al cargar cursos:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este curso?')) {
      try {
        await courseService.delete(id);
        loadCourses();
      } catch (error) {
        console.error('Error al eliminar curso:', error);
      }
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Lista de Cursos</h2>
        <Link to="/courses/new" className="btn btn-primary">
          + Nuevo Curso
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Código</th>
            <th>Créditos</th>
            <th>Estudiantes Inscritos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.credits}</td>
              <td>{course.students.length}</td>
              <td className="actions">
                <Link to={`/courses/edit/${course.id}`} className="btn btn-secondary">
                  Editar
                </Link>
                <button 
                  onClick={() => handleDelete(course.id)} 
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;