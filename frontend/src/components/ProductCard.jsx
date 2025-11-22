import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const {
        id,
        nombre,
        descripcion,
        precio,
        imagen,
        slug,
        categoria,
        stock
    } = product;

    return (
        <div className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
            {/* Imagen del producto */}
            <div className="relative overflow-hidden">
                <img 
                    src={imagen} 
                    alt={nombre}
                    className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105"
                />
                {product.destacado && (
                    <span className="absolute px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded top-2 left-2">
                        Destacado
                    </span>
                )}
            </div>
            
            {/* Información del producto */}
            <div className="p-4">
                <span className="text-sm tracking-wide text-gray-500 uppercase">
                    {categoria}
                </span>
                
                <h3 className="mt-1 mb-2 text-lg font-semibold text-gray-800 line-clamp-2">
                    {nombre}
                </h3>
                
                <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                    {descripcion}
                </p>
                
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                        ${precio.toFixed(2)}
                    </span>
                    
                    <span className={`text-sm ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock > 0 ? `${stock} disponibles` : 'Agotado'}
                    </span>
                </div>
                
                {/* Botones de acción */}
                <div className="flex mt-4 space-x-2">
                    <Link 
                        to={`/producto/${slug}`}
                        className="flex-1 py-2 text-center text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Ver Detalles
                    </Link>
                    
                    <button 
                        className="px-3 text-gray-700 transition-colors bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        disabled={stock === 0}
                    >
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;