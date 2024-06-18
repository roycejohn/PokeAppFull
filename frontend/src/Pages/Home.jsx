
import pikachu from '../assets/logo-poke.png';
import pokemon from '../assets/pokemon.svg';
import ProtectedRoute from '../components/ProtectedRoute';

const Home = () => {
  return (
    <ProtectedRoute>
        <div className="home">
            <div className="first-col">
                <h1>WELCOME</h1>
                <h2>
                    to
                </h2>
                <img src={pokemon} alt="Pikachu" className="" />
                <span>
                    API & GAME
                </span>
                <p>Immerse yourself in the world of Pokémon. Explore our detailed Pokédex to discover and learn about many of your favorite Pokémon. Our database offers valuable insights and information.</p>
                <p>Enjoy our engaging Pokémon memory board game. Test your memory and strategy skills. Perfect for quick, fun sessions!</p>
                <div>
                    <button className='button-left' onClick={() => window.location.href = '/pokemons'}>
                        See Pokedex
                    </button>
                    <button className='button-right' onClick={() => window.location.href = '/game'}>
                        Play Games
                    </button>
                </div>
                
            </div>
            <div className="second-col">
                <img src={pikachu} alt="Pikachu"/>
                <span>Discover. Play. Have Fun.</span>
            
            </div>
        </div>
    </ProtectedRoute>
  );
};

export default Home;