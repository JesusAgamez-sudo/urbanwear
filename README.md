# 🛍️ UrbanWear - Ecommerce de Ropa Urbana

![UrbanWear](https://via.placeholder.com/800x400/6366f1/ffffff?text=UrbanWear+-+Ropa+Urbana)

Un moderno ecommerce desarrollado con tecnologías full-stack para la venta de ropa urbana.

## 🚀 Características

- **Catálogo de productos** con filtros por categoría
- **Diseño responsive** adaptado a todos los dispositivos
- **Imágenes locales** optimizadas
- **Navegación intuitiva** con React Router
- **API RESTful** completa
- **Base de datos MySQL** con migraciones

## 🛠️ Tecnologías Utilizadas

### Frontend
- ⚛️ React 18
- 🎨 TailwindCSS
- 🚀 Vite
- 🔀 React Router DOM
- 📡 Axios

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🗄️ MySQL2
- 🔐 CORS
- 📝 Dotenv

### Base de Datos
- 🐬 MySQL 8.0+
- 🔄 Sistema de migraciones

## 📦 Estructura del Proyecto
urbanwear/
├── 📁 backend/ # API REST
│ ├── src/
│ │ ├── config/ # Configuración DB
│ │ ├── database/ # Migraciones
│ │ └── routes/ # Endpoints API
│ ├── package.json
│ └── .env
├── 📁 frontend/ # Aplicación React
│ ├── src/
│ │ ├── components/ # Componentes reutilizables
│ │ ├── pages/ # Vistas de la aplicación
│ │ └── styles/ # Estilos CSS
│ ├── public/ # Assets estáticos
│ └── package.json
└── 📁 docs/ # Documentación


## ⚡ Instalación y Configuración

### Prerrequisitos
- Node.js 16+
- MySQL 8.0+
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/urbanwear.git
cd urbanwear

cd backend
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales MySQL
# Ejecutar migraciones
npm run migrate

4. Configurar Frontend
cd ../frontend
npm install

5. Ejecutar la aplicación
# Terminal 1 - Backend (puerto 5000)
cd backend && npm run dev

# Terminal 2 - Frontend (puerto 3000)  
cd frontend && npm run dev

🌐 Uso
Acceder a la aplicación: http://localhost:3000

Ver API: http://localhost:5000/api/products

Explorar catálogo: Navega por las diferentes categorías

Ver detalles: Click en cualquier producto para más información

📊 API Endpoints
GET /api/health - Estado del servidor

GET /api/products - Listar todos los productos

GET /api/products/:slug - Obtener producto por slug

🎨 Capturas de Pantalla
(Incluir capturas de tu aplicación aquí)

🤝 Contribución
Fork el proyecto

Crear una rama feature (git checkout -b feature/AmazingFeature)

Commit cambios (git commit -m 'Add some AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abrir un Pull Request

📝 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para detalles.

👨‍💻 Autor
Tu Jesus Agamez

GitHub: JesusAgamez-sudo

🙏 Agradecimientos
Create React App

TailwindCSS

Vite
