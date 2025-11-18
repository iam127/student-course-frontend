import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { studentService } from '../services/api';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await studentService.getAll();
      setStudents(response.data);
    } catch (error) {
      console.error('Error al cargar estudiantes:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este estudiante?')) {
      try {
        await studentService.delete(id);
        loadStudents();
      } catch (error) {
        console.error('Error al eliminar estudiante:', error);
      }
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Lista de Estudiantes</h2>
        <Link to="/students/new" className="btn btn-primary">
          + Nuevo Estudiante
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Cursos Matriculados</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                {student.courses.map(course => (
                  <span key={course.id} className="badge badge-primary">
                    {course.name}
                  </span>
                ))}
              </td>
              <td className="actions">
                <Link to={`/students/edit/${student.id}`} className="btn btn-secondary">
                  Editar
                </Link>
                <button 
                  onClick={() => handleDelete(student.id)} 
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

export default StudentList;