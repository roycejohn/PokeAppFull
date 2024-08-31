// import dotenv from 'dotenv'
// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import connectDB from './db/dbConnection.js';
// import userRoutes from './routes/userRoutes.js';


// dotenv.config();

// console.log('MONGO_URI:', process.env.MONGO_URI);
// console.log('JWT_SECRET:', process.env.JWT_SECRET);


// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors({
//   origin: ['http://localhost:5173'],
//   credentials: true
// }));
// app.use(cookieParser());
// app.use(express.json());


// app.use('/auth', userRoutes);
// // app.use('/post', postRoutes);


// connectDB();


// app.listen(port, () => {
//   console.log(`server is listening on port: ${port}`)
// });

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/dbConnection.js';
// import userRoutes from './routes/userRoutes.js';
import { getAllPokemons, getPokemonById, getPokemonInfo } from './controllers/json_file_pokemonController.js';
// import pokemonRouter from './routes/pokemonRouter.js'; 

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);
// console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// User Authentication Routes
// app.use('/auth', userRoutes);

// Pokémon JSON Data Routes
app.get('/json/pokemon', getAllPokemons);
app.get('/json/pokemon/:id', getPokemonById);
app.get('/json/pokemon/:id/:info', getPokemonInfo);

// // MongoDB Pokémon Routes
// app.use('/pokemons', pokemonRouter);

connectDB();

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
