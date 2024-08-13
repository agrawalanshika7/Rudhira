import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

export async function connectDB () {
    try{
        const url = process.env.DB_URL
        await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
