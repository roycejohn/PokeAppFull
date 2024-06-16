
// import dotenv from 'dotenv'
// import express from 'express';
// import cors from 'cors';
// import connectDB from './db/dbConnection.js';
// import userRoutes from './routes/userRoutes.js'


// dotenv.config();

// // const express = require("express")

// const app = express();
// const port = process.env.PORT || 4000;

// // Log environment variables to ensure they are loaded correctly
// console.log('MONGO_URI:', process.env.MONGO_URI);
// console.log('JWT_SECRET:', process.env.JWT_SECRET);


// app.use(cors());
// app.use(express.json());
// connectDB();

// app.use('/user', userRoutes);
// // app.use('/post', postRoutes);

// app.listen(port, () => {
//   console.log(`server is listening on port: ${port}`)
// });

import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/dbConnection.js';
import { UserRouter } from './routes/user.js';


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


app.use('/auth', UserRouter);
// app.use('/post', postRoutes);


connectDB();


app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
});