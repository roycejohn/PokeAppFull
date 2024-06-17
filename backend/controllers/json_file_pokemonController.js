// Import the JSON file      ---- THIS ARE CONTROLERS FOR USING JSON FILE FROM ROOT 
let jsonData = require('../pokedex.json');


// Get all Pokemons : /pokemon
const getAllPokemons = (req,res) => {
    res.json(jsonData);
}

// Route to get a specific Pokémon by ID
const getPokemonById = (req, res) => {
    const id = req.params.id;
    const pokemon = jsonData.find(p => p.id === parseInt(id));
    if (!pokemon) {
        res.status(404).json({ error: 'Pokémon not found' });
    } else {
        res.json(pokemon);
    }
};

// Optional route to get specific information about a Pokémon
const getPokemonInfo = (req, res) => {
    const id = req.params.id;
    const info = req.params.info;
    const pokemon = jsonData.find(p => p.id === parseInt(id));
    if (!pokemon) {
        res.status(404).json({ error: 'Pokémon not found' });
    } else {
        const selectedInfo = pokemon[info];
        if (selectedInfo) {
            res.json({ [info]: selectedInfo });
        } else {
            res.status(400).json({ error: 'Invalid info parameter' });
        }
    }
};


module.exports = { getAllPokemons, getPokemonById, getPokemonInfo }