import axios from 'axios';

const API_URL = 'https://student-course-api-42yh.onrender.com/api';

export const studentService = {
  getAll: () => axios.get(`${API_URL}/students`),
  getById: (id) => axios.get(`${API_URL}/students/${id}`),
  create: (student) => axios.post(`${API_URL}/students`, student),
  update: (id, student) => axios.put(`${API_URL}/students/${id}`, student),
  delete: (id) => axios.delete(`${API_URL}/students/${id}`),
  enrollInCourse: (studentId, courseId) => 
    axios.post(`${API_URL}/students/${studentId}/courses/${courseId}`),
  unenrollFromCourse: (studentId, courseId) => 
    axios.delete(`${API_URL}/students/${studentId}/courses/${courseId}`)
};

export const courseService = {
  getAll: () => axios.get(`${API_URL}/courses`),
  getById: (id) => axios.get(`${API_URL}/courses/${id}`),
  create: (course) => axios.post(`${API_URL}/courses`, course),
  update: (id, course) => axios.put(`${API_URL}/courses/${id}`, course),
  delete: (id) => axios.delete(`${API_URL}/courses/${id}`)
};