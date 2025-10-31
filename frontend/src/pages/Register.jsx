import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container px-4 py-8 mx-auto max-w-md">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-black text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Crear una cuenta</h1>
          <p className="text-gray-300">Únete a UrbanWear y disfruta de nuestras ventajas</p>
        </div>
        
        <form className="p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Nombre completo</label>
            <input type="text" className="input-field" placeholder="Tu nombre" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Correo electrónico</label>
            <input type="email" className="input-field" placeholder="tu@email.com" />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn-primary w-full mb-4">Registrarse</button>
          
          <div className="text-center">
            <p className="text-gray-700">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="text-purple-600 hover:text-purple-800 font-bold">Inicia sesión</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;