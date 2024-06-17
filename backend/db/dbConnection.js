
import mongoose from "mongoose";
import dotenv from'dotenv';

dotenv.config();

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName: 'proj_auth',
         
        });
        console.log(`MongoDB connected: ${conn.connection.name}`);


    } catch(error) {
        console.error(error);
        
    }
};

export default connectDB;