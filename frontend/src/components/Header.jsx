import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            URBAN<span className="text-purple-500">WEAR</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-purple-400 transition-colors">Inicio</Link>
            <Link to="/catalogo" className="hover:text-purple-400 transition-colors">Catálogo</Link>
            <Link to="/contacto" className="hover:text-purple-400 transition-colors">Contacto</Link>
            
            <Link to="/carrito" className="hover:text-purple-400 transition-colors">
              <i className="fas fa-shopping-cart text-xl"></i>
            </Link>

            <Link to="/login" className="hover:text-purple-400 transition-colors">Iniciar Sesión</Link>
            <Link to="/registro" className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition-colors">
              Registrarse
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
            <Link to="/catalogo" className="block py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Catálogo</Link>
            <Link to="/contacto" className="block py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
            <Link to="/carrito" className="block py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Carrito</Link>
            <Link to="/login" className="block py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Iniciar Sesión</Link>
            <Link to="/registro" className="block py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Registrarse</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
