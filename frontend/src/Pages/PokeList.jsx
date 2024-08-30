
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadingPoke from "../assets/pokeballAni.gif"
import pokedexImage from '../assets/pokedex.png'
// import ProtectedRoute from "../components/ProtectedRoute";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    // fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
    fetch('http://localhost:4000/json/pokemon/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const formattedData = data.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name.english,
          type: pokemon.type,
          base: pokemon.base,
        }));

        setPokemons(formattedData);
        setTotalPages(Math.ceil(formattedData.length / pageSize));
        setSearchResults(formattedData.slice(0, pageSize));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString() === searchTerm
    );
    setSearchResults(filteredPokemons);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const startIndex = (newPage - 1) * pageSize;
    setSearchResults(pokemons.slice(startIndex, startIndex + pageSize));
  };

  if (loading) {
    return (
      <div className="h-16 w-16">
        <img src={loadingPoke} alt="Loading" />
        <p>Loading...</p> 
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <ProtectedRoute>
      <div className="pokedex-page container flex flex-col items-center justify-center p-4">
        <div className="text-center mb-4">
          <img className="h-32 w-96" src={pokedexImage} />
          <h1 className="text-xl text-gray-600 mb-4">Choose Your Pokémon :</h1>
        </div>
        <div className="flex flex col sm:flex-row items-center mb-4">
          <input
            type="text"
            placeholder="Pokémon Name or ID"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className=" px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:bg-gray-200 mb-2 sm:mb-0 sm:mr-2"
          />
          <button 
            type="button"
            onClick={handleSearchClick}
            className="mx-2 px-4 py-2 border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="w-full">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
            {searchResults.map(pokemon => (
              <li key={pokemon.id} className="poke-cards p-3 m-2 rounded-md flex flex-col items-center">
                <Link to={`/pokemons/${pokemon.id}`} className="poke-card p-5 rounded-md text-center flex flex-col items-center object-contain w-full h-full">
                  <div className="poke-img-bg w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 flex items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      alt={pokemon.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-sm sm:text-md md:text-lg font-semibold mt-2">#{pokemon.id}</h3>
                  <h3 className="text-sm sm:text-md md:text-lg font-semibold">{pokemon.name}</h3>
                  <p className="text-xs sm:text-sm md:text-md">Type: {pokemon.type.join(', ')}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            className="button-back"
            disabled={currentPage === 1}
          >
            Back
          </button>
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            className="button-next"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    // </ProtectedRoute>
  );
}

export default PokeList;

