import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { getAllPokemons, getPokemonById, searchPokemonByName } from './controllers/pokemonController.js';

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev')); // Logging HTTP requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokémon API!');
})
app.get('/pokemon', getAllPokemons); // Get all Pokemons
app.get('/pokemon/:id', getPokemonById); // Get a specific Pokemon by ID
app.get('/pokemon/search', searchPokemonByName); // Search for Pokemon by name

// Handle 404 - Not Found
app.use((req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'Route not found'
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
