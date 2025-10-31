import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setFeaturedProducts(response.data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto">
      <section className="p-8 mb-12 text-white rounded-lg bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Colección Urbana 2024</h1>
          <p className="mb-6 text-xl">Descubre las últimas tendencias en ropa urbana con estilo único.</p>
          <Link to="/catalogo" className="inline-block px-6 py-3 font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700">Ver Colección</Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-bold text-center">Productos Destacados</h2>
        {loading ? (
          <div className="text-center">Cargando productos...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl">
                <Link to={`/producto/${product.slug}`}>
                  <img src={product.image_url} alt={product.name} className="object-cover w-full h-64"/>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
                    <p className="mb-2 text-gray-600">${product.price}</p>
                    <button className="w-full py-2 text-white bg-black rounded hover:bg-gray-800">Ver Detalles</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;