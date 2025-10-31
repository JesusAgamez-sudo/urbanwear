import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ['Todos', 'Camisetas', 'Hoodies', 'Pantalones'];
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h1 className="mb-4 text-3xl font-bold md:mb-0">Nuestro Catálogo</h1>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-purple-500">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>

      {loading ? <div className="text-center">Cargando productos...</div> : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl">
              <Link to={`/producto/${product.slug}`}>
                <img src={product.image_url} alt={product.name} className="object-cover w-full h-64"/>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
                  <p className="mb-2 text-gray-600">${product.price}</p>
                  <span className={`text-sm ${product.inventory_quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inventory_quantity > 0 ? 'En stock' : 'Agotado'}
                  </span>
                  <button className="w-full py-2 mt-2 text-white bg-black rounded hover:bg-gray-800">Ver Detalles</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;