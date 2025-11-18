# 🎓 Student Course Management System - Frontend

Aplicación web desarrollada con React que proporciona una interfaz moderna e intuitiva para la gestión de estudiantes, cursos y matrículas universitarias.

## 👨‍💻 Autor

**Matias Galvan Guerrero**  
TECSUP - Instituto de Educación Superior Tecnológica  
Ciclo: 4to | Curso: Desarrollo de Aplicaciones Web

---

## 🚀 Tecnologías Utilizadas

- **React 18** - Librería de interfaz de usuario
- **React Router DOM** - Navegación entre páginas
- **Axios** - Cliente HTTP para consumir API
- **CSS3** - Estilos y diseño responsive
- **JavaScript ES6+** - Lenguaje de programación
- **Render** - Plataforma de despliegue

---

## 📋 Características

- ✅ Interfaz moderna y responsive
- ✅ Gestión completa de estudiantes (CRUD)
- ✅ Gestión completa de cursos (CRUD)
- ✅ Sistema de matrículas interactivo
- ✅ Navegación fluida entre secciones
- ✅ Integración con API REST
- ✅ Diseño profesional con gradientes
- ✅ Experiencia de usuario optimizada

---

## 🗂️ Estructura del Proyecto
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StudentList.js
│   │   ├── StudentForm.js
│   │   ├── CourseList.js
│   │   ├── CourseForm.js
│   │   └── EnrollmentManager.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## 🔧 Configuración Local

### **Requisitos Previos**

- Node.js 16+ y npm
- Git
- Backend API ejecutándose (ver [student-course-backend](https://github.com/iam127/student-course-backend))

### **Instalación**

1. **Clonar el repositorio:**
```bash
git clone https://github.com/iam127/student-course-frontend.git
cd student-course-frontend
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar URL de la API:**

Edita `src/services/api.js` y actualiza la URL del backend:
```javascript
const API_URL = 'http://localhost:8080/api';
// O para producción:
// const API_URL = 'https://student-course-api-42yh.onrender.com/api';
```

4. **Iniciar aplicación en modo desarrollo:**
```bash
npm start
```

La aplicación estará disponible en: `http://localhost:3000`

---

## 📦 Scripts Disponibles
```bash
# Iniciar en modo desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests
npm test

# Analizar dependencias
npm run analyze
```

---

## 🌐 Despliegue en Render

La aplicación está desplegada en Render y disponible en:

**URL de la Aplicación:** https://student-course-frontend.onrender.com

### **Configuración de Despliegue:**
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `build`
- **Environment:** Static Site

---

## 🧩 Componentes Principales

### **StudentList**
Muestra todos los estudiantes registrados con sus cursos matriculados.

### **StudentForm**
Formulario para crear y editar información de estudiantes.

### **CourseList**
Lista todos los cursos disponibles con información detallada.

### **CourseForm**
Formulario para administrar cursos (crear/editar).

### **EnrollmentManager**
Interfaz interactiva para gestionar matrículas de estudiantes en cursos.

---

## 🎯 Funcionalidades

### **Gestión de Estudiantes**
- Crear nuevo estudiante
- Ver lista de estudiantes
- Editar información del estudiante
- Eliminar estudiante
- Visualizar cursos matriculados

### **Gestión de Cursos**
- Crear nuevo curso
- Ver lista de cursos
- Editar información del curso
- Eliminar curso
- Ver estudiantes inscritos

### **Sistema de Matrículas**
- Matricular estudiante en curso
- Desmatricular estudiante de curso
- Vista interactiva con selección de estudiante y curso
- Tabla de matrículas actuales

---

## 🎨 Paleta de Colores
```css
Primary: #667eea (Púrpura)
Secondary: #764ba2 (Morado)
Background: #f5f5f5 (Gris claro)
Cards: #ffffff (Blanco)
Text: #333333 (Gris oscuro)
```

---

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

---

## 🔗 Integración con Backend

La aplicación consume los siguientes endpoints:
```javascript
// Estudiantes
GET    /api/students
GET    /api/students/{id}
POST   /api/students
PUT    /api/students/{id}
DELETE /api/students/{id}

// Cursos
GET    /api/courses
GET    /api/courses/{id}
POST   /api/courses
PUT    /api/courses/{id}
DELETE /api/courses/{id}

// Matrículas
POST   /api/students/{studentId}/courses/{courseId}
DELETE /api/students/{studentId}/courses/{courseId}
```

---

## 🔗 Enlaces Relacionados

- **Backend API:** [student-course-backend](https://github.com/iam127/student-course-backend)
- **API en Producción:** [https://student-course-api-42yh.onrender.com](https://student-course-api-42yh.onrender.com)
- **Documentación React:** [https://react.dev](https://react.dev)

---

## Realizado por

**Matias Galvan Guerrero**  
Estudiante de Desarrollo de Software - TECSUP  
📧 Email: matias.galvan@tecsup.edu.pe  
🔗 GitHub: [@iam127](https://github.com/iam127)

---

- TECSUP - Instituto de Educación Superior Tecnológica
- Docentes del curso de Desarrollo de Aplicaciones Web
- Comunidad de React y Spring Boot
