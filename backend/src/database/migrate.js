import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const initialConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
};

const migrate = async () => {
  let connection;
  try {
    console.log('🔄 Starting database migration...');
    
    connection = await mysql.createConnection(initialConfig);
    
    await connection.query('CREATE DATABASE IF NOT EXISTS urbanwear');
    console.log('✅ Database created');
    
    await connection.end();
    
    const dbConfig = {
      ...initialConfig,
      database: 'urbanwear',
      multipleStatements: true
    };
    connection = await mysql.createConnection(dbConfig);
    
    console.log('✅ Connected to urbanwear database');
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        description TEXT,
        price DECIMAL(10,2) NOT NULL,
        compare_price DECIMAL(10,2),
        category VARCHAR(100),
        image_url VARCHAR(500),
        inventory_quantity INT DEFAULT 0,
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Products table created');

    // ✅ CAMBIO CRÍTICO: Borrar datos existentes primero
    await connection.query('DELETE FROM products');
    console.log('✅ Old data deleted');

    // ✅ CAMBIO CRÍTICO: Usar INSERT en lugar de INSERT IGNORE
    await connection.query(`
      INSERT INTO products (name, slug, description, price, compare_price, category, image_url, inventory_quantity, featured) VALUES 
      ('Camiseta Street Basic', 'camiseta-street-basic', 'Camiseta urbana de algodón', 29.99, 39.99, 'Camisetas', '/images/products/camiseta-street-basic.jpg', 50, 1),
      ('Hoodie Skater Negro', 'hoodie-skater-negro', 'Hoodie cómodo urbano', 49.99, 59.99, 'Hoodies', '/images/products/hoodie-skater-negro.jpg', 30, 1),
      ('Pantalones Cargo Urban', 'pantalones-cargo-urban', 'Pantalones cargo urbanos', 39.99, NULL, 'Pantalones', '/images/products/pantalones-cargo-urban.jpg', 25, 0),
      ('Zapatos Urban Classic', 'zapatos-urban-classic', 'Zapatos urbanos de cuero sintético', 59.99, 69.99, 'Zapatos', '/images/products/zapatos-urban-classic.jpg', 40, 1)
    `);
    console.log('✅ New data inserted with correct image paths');

    console.log('🎉 Database migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

migrate();