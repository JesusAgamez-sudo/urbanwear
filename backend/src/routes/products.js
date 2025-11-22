const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET /api/products - Listar todos los productos
router.get('/', async (req, res) => {
    try {
        const [products] = await db.execute(`
            SELECT id, nombre, descripcion, precio, imagen, slug, categoria, 
                   stock, destacado, created_at 
            FROM productos 
            WHERE activo = 1
            ORDER BY created_at DESC
        `);
        
        res.json({
            success: true,
            data: products,
            count: products.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener productos',
            error: error.message
        });
    }
});

// GET /api/products/:slug - Obtener producto por slug
router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const [products] = await db.execute(
            'SELECT * FROM productos WHERE slug = ? AND activo = 1',
            [slug]
        );
        
        if (products.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            });
        }
        
        res.json({
            success: true,
            data: products[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el producto',
            error: error.message
        });
    }
});

module.exports = router;