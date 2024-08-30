
import logoPoke from '../assets/logo-poke.png';
import pokemon from '../assets/pokemon.svg';
// import ProtectedRoute from '../components/ProtectedRoute';

const Home = () => {
  return (
    // <ProtectedRoute>
    <section className='home'>
        {/* col 1  */}
        <div className="first-col mx-auto max-w-screen-2xl mt-16 mb-10">
            <div className='flex flex-col md:flex-row items-center'>
                <div className='flex-1 px-5'>
                    <h1 className='text-lg md:text-xl mb-2'>WELCOME</h1>
                    <h2 className='mb-20'>
                        to
                    </h2>
                    <div className='flex justify-center items-center px-5 mb-1'>
                    <img src={pokemon} alt="pokemon" className="h-96 w-96 absolute" />
                    </div>
                    <h1 className='mt-20'>
                        API & GAME
                    </h1>
                    <p>Immerse yourself in the world of Pokémon. Explore our detailed Pokédex to discover and learn about many of your favorite Pokémon. Our database offers valuable insights and information.</p>
                    <p>Enjoy our engaging Pokémon memory board game. Test your memory and strategy skills. Perfect for quick, fun sessions!</p>
                    <button className='button-left' onClick={() => window.location.href = '/pokemons'}>
                        See Pokedex
                    </button>
                    <button className='button-right' onClick={() => window.location.href = '/game'}>
                        Play Games
                    </button>
                </div>

                {/* col 2  */}
                <div className='flex-1 px-5 mb-1'>
                    <div className="second-col">
                        <img 
                            src={logoPoke}
                            alt="logoPoke"
                            className='h-96  w-96'
                        />
                        <span>Discover. Play. Have Fun.</span> 
                    </div>
                </div> 
            </div>
        </div>
    </section>
    // </ProtectedRoute>
  );
};

export default Home;