import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(protect, admin, createProduct)  // Create a new product (Admin only)
    .get(getAllProducts);                 // Get all products (Public)

router.route('/:id')
    .get(getProductById)                  // Get a product by ID (Public)
    .put(protect, admin, updateProduct)   // Update a product by ID (Admin only)
    .delete(protect, admin, deleteProduct); // Delete a product by ID (Admin only)

export default router;
