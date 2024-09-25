import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Allow CORS for all origins
app.use(cors());

// Define routes
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
