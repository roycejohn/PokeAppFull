
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import loadingPoke from "../assets/pokeballAni.gif"
// import pokedexImage from '../assets/pokedex.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// // import ProtectedRoute from "../components/ProtectedRoute";

// const PokeList = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const pageSize = 12;

//   useEffect(() => {
//     // fetch('https://pokeapigameproject.onrender.com')
//     fetch('http://localhost:3000/pokemon/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         const formattedData = data.map(pokemon => ({
//           id: pokemon.id,
//           name: pokemon.name.english,
//           type: pokemon.type,
//           base: pokemon.base,
//         }));

//         setPokemons(formattedData);
//         setTotalPages(Math.ceil(formattedData.length / pageSize));
//         setSearchResults(formattedData.slice(0, pageSize));
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearchInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchClick = () => {
//     const filteredPokemons = pokemons.filter(pokemon =>
//       pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pokemon.id.toString() === searchTerm
//     );
//     setSearchResults(filteredPokemons);
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     setCurrentPage(newPage);
//     const startIndex = (newPage - 1) * pageSize;
//     setSearchResults(pokemons.slice(startIndex, startIndex + pageSize));
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col min-h-screen justify-center items-center">
//         <img 
//           className="h-16 w-16 mb-4"
//           src={loadingPoke} alt="Loading" 

//         />
//         <p>Patience, it's the free version! Grab a coffee while we load. 😄 </p> 
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="flex flex-col min-h-screen
//      justify-center items-center">
//               Error: {error}
//             </div>;
//   }

//   return (
//     // <ProtectedRoute>
//       <div className="pokedex-page flex flex-col items-center justify-center">
//         <div className="m-4">
//           <img className="h-32 w-96 mb-8" src={pokedexImage} />
//           <h1 className="text-sm md:text-lg mb-4 mx-4">Choose Your Pokémon :</h1>
//         <div className="flex flex-col md:flex-row mb-4 space-x-0 md:space-x-2">
//           <div className="search-wrapper relative flex-grow mb-4">
//             <input
//               type="text"
//               placeholder="Pokémon Name or ID"
//               value={searchTerm}
//               onChange={handleSearchInputChange}
//               className="h-8 px-4 pl-10 rounded-md w-full"
//             />
//             <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
//           </div>
//           <div className="h-8 flex items-center justify-center rounded-md">
//             <button 
//               type="button"
//               onClick={handleSearchClick}
//               className="h-8 px-4 border rounded-md focus:outline-none focus:border-blue-500 hover:bg-blue-100 active:bg-blue-200"
//             >
//               Search
//             </button>
//           </div>
//         </div>
//         </div>
//         <div className="">
//           <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
//             {searchResults.map(pokemon => (
//               <li 
//                 key={pokemon.id} 
//                 className="poke-card p-3 m-2 rounded-md flex flex-col items-center">
//                 <Link to={`/pokemons/${pokemon.id}`} className=" p-5 rounded-md text-center flex flex-col items-center object-contain">
//                   <div className="poke-img-bg w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 flex items-center justify-center rounded-md overflow-hidden">
//                     <img
//                       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//                       alt={pokemon.name}
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="text-sm sm:text-md md:text-lg font-semibold mt-2">#{pokemon.id}</h1>
//                     <h2 className="text-sm sm:text-md md:text-lg font-semibold">{pokemon.name}</h2>
//                     <p className="text-xs sm:text-sm md:text-md">Type: {pokemon.type.join(', ')}</p>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex justify-center m-10 space-x-4">
//           <button 
//             onClick={() => handlePageChange(currentPage - 1)}
//             className="button-back p-2"
//             disabled={currentPage === 1}
//           >
//             Back
//           </button>
//           <button 
//             onClick={() => handlePageChange(currentPage + 1)}
//             className="button-next p-2"
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     // </ProtectedRoute>
//   );
// }

// export default PokeList;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loadingPoke from "../assets/pokeballAni.gif";
import pokedexImage from '../assets/pokedex.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useApi from "../hooks/apiHook";  // Import the useApi hook

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 12;

  const { data, loading, error } = useApi('/pokemon/');  // Use the useApi hook

  useEffect(() => {
    if (data) {
      const formattedData = data.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name.english,
        type: pokemon.type,
        base: pokemon.base,
      }));

      setPokemons(formattedData);
      setTotalPages(Math.ceil(formattedData.length / pageSize));
      setSearchResults(formattedData.slice(0, pageSize));
    }
  }, [data]);

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
      <div className="flex flex-col min-h-screen justify-center items-center">
        <img 
          className="h-16 w-16 mb-4"
          src={loadingPoke} alt="Loading" 
        />
        <p>Patience, it's the free version! Grab a coffee while we load. 😄 </p> 
      </div>
    );
  }

  if (error) {
    return <div className="flex flex-col min-h-screen justify-center items-center">
      Error: {error}
    </div>;
  }

  return (
    <div className="pokedex-page flex flex-col items-center justify-center">
      <div className="m-4">
        <img className="h-32 w-96 mb-8" src={pokedexImage} />
        <h1 className="text-sm md:text-lg mb-4 mx-4">Choose Your Pokémon :</h1>
        <div className="flex flex-col md:flex-row mb-4 space-x-0 md:space-x-2">
          <div className="search-wrapper relative flex-grow mb-4">
            <input
              type="text"
              placeholder="Pokémon Name or ID"
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="h-8 px-4 pl-10 rounded-md w-full"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
          </div>
          <div className="h-8 flex items-center justify-center rounded-md">
            <button 
              type="button"
              onClick={handleSearchClick}
              className="h-8 px-4 border rounded-md focus:outline-none focus:border-blue-500 hover:bg-blue-100 active:bg-blue-200"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
          {searchResults.map(pokemon => (
            <li 
              key={pokemon.id} 
              className="poke-card p-3 m-2 rounded-md flex flex-col items-center">
              <Link to={`/pokemons/${pokemon.id}`} className=" p-5 rounded-md text-center flex flex-col items-center object-contain">
                <div className="poke-img-bg w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 flex items-center justify-center rounded-md overflow-hidden">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="text-sm sm:text-md md:text-lg font-semibold mt-2">#{pokemon.id}</h1>
                  <h2 className="text-sm sm:text-md md:text-lg font-semibold">{pokemon.name}</h2>
                  <p className="text-xs sm:text-sm md:text-md">Type: {pokemon.type.join(', ')}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center m-10 space-x-4">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          className="button-back p-2"
          disabled={currentPage === 1}
        >
          Back
        </button>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          className="button-next p-2"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokeList;

