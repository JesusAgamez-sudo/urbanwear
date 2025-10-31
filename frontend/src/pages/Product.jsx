import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { slug } = useParams();
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Página de Producto: {slug}</h1>
      <p className="text-gray-600">Esta página mostrará los detalles del producto {slug}</p>
      <p className="mt-4">🚀 Próximamente: Conexión con la API para mostrar datos reales</p>
    </div>
  );
};

export default Product;