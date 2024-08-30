import { Link } from 'react-router-dom';
import pokeboardImage from '../assets/memoryGame.png';
import pokefightImage from '../assets/fightLogo.png';
// import ProtectedRoute from '../components/ProtectedRoute';

function Game() {
  return (
    // <ProtectedRoute>
      <div className="mx-auto max-w-screen-2xl min-h-fit flex flex-col justify-center items-center">
          <div className="flex flex-col items-center m-4 md:m-10 p-2 md:p-8">
            <h1 className='text-4xl md:text-5xl font-bold mb-8'>
              Pokémon Games
            </h1>
            <p className="text-xl">Choose your game:</p>
          </div>
          <div className='flex flex-col md:flex-row justify-center  mb-20 md:mb-32'>
            <Link to="/game/pokeboard">
              <div className="relative group m-6">
                <img src={pokeboardImage} className="block w-80 h-80 object-cover rounded-lg shadow-md" alt="Poke Board" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-bold">Poke Board</span>
                </div>
              </div>
            </Link>
            <Link to="/game/pokefight">
              <div className="relative group m-6">
                <img src={pokefightImage} className="block w-80 h-80 object-cover rounded-lg shadow-md" alt="Poke Fight" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-bold">Poke Fight</span>
                </div>
              </div>
            </Link>
          </div>
      
      </div>
    // </ProtectedRoute>
   
  );
}

export default Game;