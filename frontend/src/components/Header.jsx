
// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
// import axios from 'axios';
import { useState, } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pikachu.svg';
import avatar from '../assets/avatar.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();
  // const [username, setUsername] = useState(location.state?.username);

  // useEffect(() => {
  //   if (location.state?.username) {
  //     setUsername(location.state.username);
  //   }
  // }, [location.state]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleLogout = () => {
  //   axios.get('http://localhost:4000/auth/logout')
  //     .then(res => {
  //       if (res.data.status) {
  //         navigate('/login');
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <header>
      <div className="flex justify-between items-center mx-auto max-w-screen-2xl text-sm">
        <NavLink to='/home'>
          <div className="logo">
            <img className="mx-4 w-28 h-28 cursor-pointer"
            src={logo}
            alt="Logo"
            />
          </div>
        </NavLink>
        {/* {username && <p>Welcome, {username}!</p>} */}
        <nav className="hidden md:flex space-x-4 ml-auto">
          <NavLink to="/home" className="hover:text-gray-100">Home</NavLink>
          <NavLink to="/pokemons" className="hover:text-gray-100">Pokédex</NavLink>
          <NavLink to="/game" className="hover:text-gray-100">Games</NavLink>
          <NavLink to="/about" className="hover:text-gray-100">About</NavLink>
        </nav>
        <div className="hidden md:flex items-center mx-4">
          {/* <img
            src={avatar}
            alt="Profile"
            className="w-14 h-14 rounded-full ml-12 cursor-pointer hover:shadow-lg"
          /> */}
          {/* <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button> */}
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
          <div className="">
            <NavLink to="/home" className="block py-2 px-4 font-bold hover:bg-gray-500">Home</NavLink>
            <NavLink to="/pokemons" className="block py-2 px-4 font-bold hover:bg-gray-500">Pokédex</NavLink>
            <NavLink to="/game" className="block py-2 px-4 font-bold hover:bg-gray-500">Game</NavLink>
            <NavLink to="/about" className="block py-2 px-4 font-bold hover:bg-gray-500">About</NavLink>
          </div>
          <div className="sign-list flex justify-center mt-4">
            {/* <img
              src={avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg"
            /> */}
            {/* <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
