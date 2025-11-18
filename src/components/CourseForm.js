import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { courseService } from '../services/api';

function CourseForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({
    name: '',
    code: '',
    credits: ''
  });

  useEffect(() => {
    if (id) {
      loadCourse();
    }
  }, [id]);

  const loadCourse = async () => {
    try {
      const response = await courseService.getById(id);
      setCourse(response.data);
    } catch (error) {
      console.error('Error al cargar curso:', error);
    }
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await courseService.update(id, course);
      } else {
        await courseService.create(course);
      }
      navigate('/courses');
    } catch (error) {
      console.error('Error al guardar curso:', error);
    }
  };

  return (
    <div className="card">
      <h2>{id ? 'Editar Curso' : 'Nuevo Curso'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Curso:</label>
          <input
            type="text"
            name="name"
            value={course.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Código:</label>
          <input
            type="text"
            name="code"
            value={course.code}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Créditos:</label>
          <input
            type="number"
            name="credits"
            value={course.credits}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/courses')} 
            className="btn btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;