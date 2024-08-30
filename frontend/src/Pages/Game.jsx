import { Link } from 'react-router-dom';
import pokeboardImage from '../assets/memoryGame.png';
import pokefightImage from '../assets/fightLogo.png';
// import ProtectedRoute from '../components/ProtectedRoute';

function Game() {
  return (
    // <ProtectedRoute>
      <div className="text-center py-8">
        <div className="my-8 max-w-4xl mx-auto">
          <h1 className='text-5xl font-bold mb-4 text-gray-800'>
            Pokémon Games
          </h1>
          <p className="text-xl text-gray-600 mb-4">Choose your game:</p>
          <div className='flex justify-center space-x-10 m-10'>
            <Link to="/game/pokeboard">
              <div className="relative group">
                <img src={pokeboardImage} className="block w-64 h-64 object-cover rounded-lg shadow-md" alt="Poke Board" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">Poke Board</span>
                </div>
              </div>
            </Link>
            <Link to="/game/pokefight">
              <div className="relative group">
                <img src={pokefightImage} className="block w-64 h-64 object-cover rounded-lg shadow-md" alt="Poke Fight" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">Poke Fight</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    // </ProtectedRoute>
   
  );
}

export default Game;