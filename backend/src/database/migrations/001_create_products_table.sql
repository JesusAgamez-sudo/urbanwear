-- MIGRACIÓN: Creación de tabla productos
-- GA7-220501096-AA3-EV01 - UrbanWear

CREATE TABLE IF NOT EXISTS productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(500),
    categoria VARCHAR(100) NOT NULL,
    stock INT DEFAULT 0,
    destacado BOOLEAN DEFAULT FALSE,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_categoria (categoria),
    INDEX idx_destacado (destacado),
    INDEX idx_activo (activo),
    INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de ejemplo
INSERT INTO productos (nombre, slug, descripcion, precio, imagen, categoria, stock, destacado) VALUES
('Hoodie Urban Classic', 'hoodie-urban-classic', 'Hoodie clásico de algodón premium', 59.99, '/images/hoodie-classic.jpg', 'hombres', 50, TRUE),
('Jeans Slim Fit', 'jeans-slim-fit', 'Jeans ajustados de diseño moderno', 79.99, '/images/jeans-slim.jpg', 'hombres', 30, TRUE),
('Camiseta Oversize', 'camiseta-oversize', 'Camiseta oversize unisex', 29.99, '/images/camiseta-oversize.jpg', 'mujeres', 25, FALSE);