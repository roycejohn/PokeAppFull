
import { Link } from 'react-router-dom';
import logoPoke from '../assets/logo-poke.png';
import pokemon from '../assets/pokemon.svg';
// import ProtectedRoute from '../components/ProtectedRoute';

const Home = () => {
  return (
    // <ProtectedRoute>
    <section className='home'>
        {/* col 1  */}
        <div className="first-col mx-auto max-w-screen-2xl min-h-fit m-20 pb-2">
            <div className='flex flex-col md:flex-row items-center'>
                <div className='flex-1 px-1'>
                    <h1 className='font-bold text-2xl md:text-4xl mb-4 tracking-widest'>WELCOME</h1>
                    <h2 className='mb-24'>
                        to
                    </h2>
                    <div className='flex justify-center items-center px-5'>
                        <img src={pokemon} alt="pokemon" className="h-96 w-96 absolute" />
                    </div>
                    <h2 className='text-2xl mt-20 mb-16'>
                        API & GAME
                    </h2>
                    <p className='text-sm mb-8'>Explore the Pokémon world with our detailed Pokédex. Discover and learn about your favorite Pokémon.</p>
                    <p className='text-sm'>Enjoy our engaging Pokémon memory board game. Perfect for quick, fun sessions!</p>
                    <div className='m-8'>
                        <Link to="/pokemons" className='button-left mx-4 my-2 p-2'>
                            See Pokedex
                        </Link>
                        <Link to="/game" className='button-right mx-2 p-2 px-4'>
                            Play Games
                        </Link>   
                    </div>
                </div>

                {/* col 2  */}
                <div className='flex flex-1 flex-col justify-center items-center mb-1'>
                    <img 
                        src={logoPoke}
                        alt="logoPoke"
                        className='h-96 w-96 mb-10'
                    />
                    <h1>Discover. Play. Have Fun.</h1>
                </div> 
            </div>
        </div>
    </section>
    // </ProtectedRoute>
  );
};

export default Home;