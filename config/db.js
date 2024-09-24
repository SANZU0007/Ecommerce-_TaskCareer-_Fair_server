import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const MONGO_URI =
  "mongodb+srv://sanjay:sanjay2023@cluster0.tjzm3y1.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
