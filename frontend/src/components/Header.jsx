

// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import logo from '../assets/pikachu.svg';
// import avatar from '../assets/avatar.png';


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState(location.state?.username);

//   useEffect(() => {
//     if (location.state?.username) {
//       setUsername(location.state.username);
//     }
//   }, [location.state]);


//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     axios.get('http://localhost:4000/auth/logout')
//       .then(res => {
//         if (res.data.status) {
//           navigate('/login');
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };


//   return (
//     <header className="relative">
//       <div className="container mx-auto py-1 flex justify-between items-center">
//         <Link to='/home'>
//             <div className="logo">
//               <img className="w-28 h-28 cursor-pointer" src={logo} alt="Logo" />
//             </div>
//         </Link>
//         {username && <p>Welcome, {username}!</p>}
//         <nav className="hidden md:flex space-x-4 ml-auto">
//           <a href="/home" className="hover:text-gray-100">Home</a>
//           <a href="/pokemons" className="hover:text-gray-100">Pokédex</a>
//           <a href="/game" className="hover:text-gray-100">Games</a>
//           <a href="/about" className="hover:text-gray-100">About</a>
//         </nav>
//         <div className="hidden md:flex items-center px-5">
//           <img
//             src={avatar}
//             alt="Profile"
//             className="w-14 h-14 rounded-full ml-12 cursor-pointer hover:shadow-lg"
//           />
//           <button
//             onClick={handleLogout}
//             className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//         <div className="md:hidden mx-6">
//           <button onClick={toggleMenu} className="text-black focus:outline-none">
//             <svg className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden py-2 px-4">
//           <div className="nav-list">
//             <a href="/home" className="block py-2 px-4 font-bold hover:bg-gray-500">Home</a>
//             <a href="/pokemons" className="block py-2 px-4 font-bold hover:bg-gray-500">Pokédex</a>
//             <a href="/game" className="block py-2 px-4 font-bold hover:bg-gray-500">Game</a>
//             <a href="/about" className="block py-2 px-4 font-bold hover:bg-gray-500">About</a>
//           </div>
//           <div className="sign-list flex justify-center mt-4">
//             {/* <span className="mr-4">{username}</span> */}
//             <img
//               src={avatar}
//               alt="Profile"
//               className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg"
//             />
//             <button
//               onClick={handleLogout}
//               className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/pikachu.svg';
import avatar from '../assets/avatar.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState(location.state?.username);

  useEffect(() => {
    if (location.state?.username) {
      setUsername(location.state.username);
    }
  }, [location.state]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    axios.get('http://localhost:4000/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <header className="relative">
      <div className="container mx-auto py-1 flex justify-between items-center">
        <Link to='/home'>
          <div className="logo">
            <img className="w-28 h-28 cursor-pointer" src={logo} alt="Logo" />
          </div>
        </Link>
        {username && <p>Welcome, {username}!</p>}
        <nav className="hidden md:flex space-x-4 ml-auto">
          <Link to="/home" className="hover:text-gray-100">Home</Link>
          <Link to="/pokemons" className="hover:text-gray-100">Pokédex</Link>
          <Link to="/game" className="hover:text-gray-100">Games</Link>
          <Link to="/about" className="hover:text-gray-100">About</Link>
        </nav>
        <div className="hidden md:flex items-center px-5">
          <img
            src={avatar}
            alt="Profile"
            className="w-14 h-14 rounded-full ml-12 cursor-pointer hover:shadow-lg"
          />
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        <div className="md:hidden mx-6">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden py-2 px-4">
          <div className="nav-list">
            <Link to="/home" className="block py-2 px-4 font-bold hover:bg-gray-500">Home</Link>
            <Link to="/pokemons" className="block py-2 px-4 font-bold hover:bg-gray-500">Pokédex</Link>
            <Link to="/game" className="block py-2 px-4 font-bold hover:bg-gray-500">Game</Link>
            <Link to="/about" className="block py-2 px-4 font-bold hover:bg-gray-500">About</Link>
          </div>
          <div className="sign-list flex justify-center mt-4">
            <img
              src={avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg"
            />
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
