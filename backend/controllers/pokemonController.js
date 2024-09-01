import jsonData from '../pokedex.json' assert { type: 'json' };

// Get all Pokemons: /pokemon
export const getAllPokemons = (req, res) => {
    res.status(200).json(jsonData);
};

// Get a Pokemon by ID: /pokemon/:id
export const getPokemonById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const pokemon = jsonData.find(p => p.id === id);

    if (!pokemon) {
        return res.status(404).json({
            status: 'fail',
            message: `No Pokémon found with ID ${id}`
        });
    }

    res.status(200).json(pokemon);
};

// Search Pokemon by name: /pokemon/search
export const searchPokemonByName = (req, res) => {
    const name = req.query.name?.toLowerCase() ?? '';
    const pokemon = jsonData.filter(p => p.name.english.toLowerCase().includes(name));

    if (pokemon.length === 0) {
        return res.status(404).json({
            status: 'fail',
            message: `No Pokémon found with name containing "${name}"`
        });
    }

    res.status(200).json(pokemon);
};
