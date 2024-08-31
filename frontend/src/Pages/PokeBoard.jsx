import { useEffect, useState } from 'react';

function PokeBoard() {
  const [pokemon, setPokemon] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [firstPick, setFirstPick] = useState(null);
  const [notification, setNotification] = useState('');
  const [matchedPairs, setMatchedPairs] = useState(0);

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };

  useEffect(() => {
    const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const loadPokemon = async () => {
      const randomIds = new Set();
      while (randomIds.size < 8) {
        const randomNumber = Math.ceil(Math.random() * 150);
        randomIds.add(randomNumber);
      }
      const pokePromises = [...randomIds].map(id => fetch(pokeAPIBaseUrl + id));
      const responses = await Promise.all(pokePromises);
      return await Promise.all(responses.map(res => res.json()));
    };

    const resetGame = async () => {
      const loadedPokemon = await loadPokemon();
      setPokemon([...loadedPokemon, ...loadedPokemon].sort(() => Math.random() - 0.5));
      setNotification('');
      setMatchedPairs(0);
    };

    resetGame();
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    if (matchedPairs === pokemon.length / 2 && pokemon.length > 0) {
      setNotification('Congratulations! You matched all the cards!');
    }
  }, [matchedPairs, pokemon.length]);

  const handleCardClick = (event, poke) => {
    if (isPaused) return;
    const card = event.currentTarget;
    const [front, back] = getFrontAndBackFromCard(card);

    if (front.classList.contains("rotated")) return;

    front.classList.add('rotated');
    back.classList.remove('rotated');

    if (!firstPick) {
      setFirstPick(card);
      setIsPaused(false);
    } else {
      const secondPokemonName = poke.name;
      const firstPokemonName = firstPick.dataset.pokemon;

      if (firstPokemonName === secondPokemonName) {
        setNotification(`It is a match: ${firstPokemonName}!`);
        setFirstPick(null);
        setIsPaused(false);
        setMatchedPairs(prev => prev + 1); // Increase matched pairs count by 1
      } else {
        setIsPaused(true);
        setTimeout(() => {
          front.classList.remove('rotated');
          back.classList.add('rotated');
          const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick);
          firstFront.classList.remove('rotated');
          firstBack.classList.add('rotated');
          setFirstPick(null);
          setIsPaused(false);
        }, 1000);
      }
    }
  };

  const getFrontAndBackFromCard = (card) => {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");
    return [front, back];
  };

  return (
    <div className="game-page relative mx-auto max-w-4xl min-h-fit flex flex-col items-center justify-center m-8">
      <div className="board-title flex items-center justify-between w-full py-2 pl-10">
        <h1>PokeMatch</h1>
        <button
          className="bg-blue-500 text-white p-2 mx-10 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out font-thin text-sm"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>
      {notification &&
        <div className="notification-container fixed flex justify-center items-center p-2">
          <div className="notification rounded-md flex text-center">{notification}
          </div>
        </div>
      }
      <div id="game" className='grid grid-cols-4 space-x-2'>
        {pokemon.map((poke, index) => {
          const type = poke.types[0]?.type?.name || 'normal';
          const color = colors[type];

          return (
            <div
              key={index}
              className="card relative rounded-md mt-4 w-20 h-20 md:w-40 md:h-40"
              style={{ backgroundColor: color }}
              data-pokemon={poke.name}
              onClick={(e) => handleCardClick(e, poke)}
            >
              <div className="front"></div>
              <div 
                className="back rotated" 
                style={{ backgroundColor: color }}>
                <img 
                  className='h-16 w-16 md:h-28 md:w-28'
                  src={poke.sprites.front_default} 
                  alt={poke.name} 
              />
                <h2>{poke.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokeBoard;
