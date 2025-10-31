import React from 'react';

const Contact = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Contacto</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-8">¿Tienes alguna pregunta, comentario o sugerencia? Estamos aquí para ayudarte.</p>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Formulario de contacto</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Nombre completo</label>
              <input type="text" className="input-field" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2">Correo electrónico</label>
              <input type="email" className="input-field" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
              <textarea className="input-field h-32"></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;