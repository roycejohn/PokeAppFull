import { useEffect, useState } from 'react';

function PokeFight() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchResults1, setSearchResults1] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [battleLog, setBattleLog] = useState([]);
  const [winner, setWinner] = useState('');
  const [battleOver, setBattleOver] = useState(false);

  useEffect(() => {
    fetch('https://pokeapigameproject.onrender.com')
    // fetch('http://localhost:4000/json/pokemon')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name.english,
          type: pokemon.type,
          base: pokemon.base,
        }));
        setPokemons(formattedData);
      });
  }, []);

  const handleSearchInputChange1 = (e) => {
    setSearchTerm1(e.target.value);
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      pokemon.id.toString() === e.target.value
    );
    setSearchResults1(filteredPokemons);
  };

  const handleSearchInputChange2 = (e) => {
    setSearchTerm2(e.target.value);
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      pokemon.id.toString() === e.target.value
    );
    setSearchResults2(filteredPokemons);
  };

  const handlePokemonSelect1 = (pokemon) => {
    setSelectedPokemon(pokemon);
    setSearchTerm1('');
    setSearchResults1([]);
  };

  const handlePokemonSelect2 = (pokemon) => {
    setOpponentPokemon(pokemon);
    setSearchTerm2('');
    setSearchResults2([]);
  };

  const startBattle = () => {
    if (!selectedPokemon || !opponentPokemon) return;

    let hp1 = selectedPokemon.base.HP;
    let hp2 = opponentPokemon.base.HP;
    let log = [];
    setBattleOver(false);
    setWinner('');

    const battleRound = () => {
      if (battleOver) return;

      hp2 -= Math.max(0, selectedPokemon.base.Attack - opponentPokemon.base.Defense);
      log.push(`${selectedPokemon.name} attacks ${opponentPokemon.name}, ${opponentPokemon.name} has ${hp2} HP left.`);

      if (hp2 <= 0) {
        setWinner(selectedPokemon.name);
        setBattleLog(log);
        setBattleOver(true);
        return;
      }

      hp1 -= Math.max(0, opponentPokemon.base.Attack - selectedPokemon.base.Defense);
      log.push(`${opponentPokemon.name} attacks ${selectedPokemon.name}, ${selectedPokemon.name} has ${hp1} HP left.`);

      if (hp1 <= 0) {
        setWinner(opponentPokemon.name);
        setBattleLog(log);
        setBattleOver(true);
        return;
      }

      setBattleLog(log);
      setTimeout(battleRound, 500);
    };

    battleRound();
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold m-16 text-center">Pokémon Battle</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mx-4">
        <div>
          <h4 className="text-xl mb-4 p-2">Player</h4>
          <input
            type="text"
            placeholder="Your Pokémon"
            value={searchTerm1}
            onChange={handleSearchInputChange1}
            className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:bg-gray-200"
          />
          <ul className="bg-white rounded-md shadow-md mt-2 max-h-60 overflow-auto">
            {searchResults1.map(pokemon => (
              <li
                key={pokemon.id}
                onClick={() => handlePokemonSelect1(pokemon)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
          {selectedPokemon && (
            <div className="mt-4 bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className="w-1/2 flex flex-col items-center">
                <h4 className="text-xl font-semibold mb-2">{selectedPokemon.name}</h4>
                <div className="poke-img-bg w-40 h-40 md:w-56 md:h-56 flex items-center justify-center rounded-md overflow-hidden">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemon.id}.svg`}
                    alt={selectedPokemon.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="w-1/2 pl-6">
                <p className=" text-xs md:text-lg mb-1">
                  <span className="text-blue-500 md:text-xl">Type:
                  </span> {selectedPokemon.type.join(', ')} 
                </p>
                <p className="text-xs md:text-lg mb-1 text-red-400">Base Stats:
                </p>
                <p className="text-xs">
                  <span className="">HP:
                  </span> {selectedPokemon.base.HP}
                </p>
                <p className="text-xs">
                  <span className="">Attack:
                  </span> {selectedPokemon.base.Attack}
                </p>
                <p className="text-xs">
                  <span className="">Defense:
                  </span> {selectedPokemon.base.Defense}
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <h4 className="text-xl mb-4 p-2">Computer</h4>
          <input
            type="text"
            placeholder="Search Opponent Pokémon"
            value={searchTerm2}
            onChange={handleSearchInputChange2}
            className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:bg-gray-200"
          />
          <ul className="bg-white rounded-md shadow-md mt-2 max-h-60 overflow-auto">
            {searchResults2.map(pokemon => (
              <li
                key={pokemon.id}
                onClick={() => handlePokemonSelect2(pokemon)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
          {opponentPokemon && (
            <div className="mt-4 bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className="w-1/2 flex flex-col items-center">
                <h4 className="text-xl font-semibold mb-2">{opponentPokemon.name}</h4>
                <div className="poke-img-bg w-40 h-40 md:w-56 md:h-56 flex items-center justify-center rounded-md overflow-hidden">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${opponentPokemon.id}.svg`}
                    alt={opponentPokemon.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="w-1/2 pl-6">
                <p className="text-xs md:text-lg mb-1">
                  <span className="text-blue-500 md:text-xl">Type:
                  </span> {opponentPokemon.type.join(', ')}
                </p>
                <p className="text-xs md:text-lg mb-1 text-red-400">Base Stats:
                </p>
                <p className="text-xs">
                  <span className="">HP:
                  </span> {opponentPokemon.base.HP}
                </p>
                <p className="text-xs">
                  <span className="">Attack:
                  </span> {opponentPokemon.base.Attack}
                </p>
                <p className="text-xs">
                  <span className="">Defense:
                  </span> {opponentPokemon.base.Defense}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-4 text-center">
        <button
          onClick={startBattle}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-500"
          disabled={!selectedPokemon || !opponentPokemon}
        >
          Fight
        </button>
      </div>
      <div className="min-h-80 bg-gray-100 p-4 rounded-lg shadow-md mb-10 mt-4 mx-4 flex flex-col justify-center">
        <h4 className="text-lg font-bold mb-2">Battle Log</h4>
        <ul className='text-xs mt-2 '>
          {battleLog.map((log, index) => (
            <li
              className='my-2' 
              key={index}>{log}</li>
          ))}
        </ul>
      </div>
      {winner && <h3 className="text-2xl font-bold mt-4 text-center">Winner: {winner}</h3>}
    </div>
  );
}

export default PokeFight;
