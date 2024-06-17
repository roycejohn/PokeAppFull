import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/dbConnection.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);


const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());


app.use('/auth', userRoutes);
// app.use('/post', postRoutes);


connectDB();


app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
});