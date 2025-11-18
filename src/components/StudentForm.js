import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { studentService } from '../services/api';

function StudentForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  const loadStudent = async () => {
    try {
      const response = await studentService.getById(id);
      setStudent(response.data);
    } catch (error) {
      console.error('Error al cargar estudiante:', error);
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await studentService.update(id, student);
      } else {
        await studentService.create(student);
      }
      navigate('/');
    } catch (error) {
      console.error('Error al guardar estudiante:', error);
    }
  };

  return (
    <div className="card">
      <h2>{id ? 'Editar Estudiante' : 'Nuevo Estudiante'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={student.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="btn btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;