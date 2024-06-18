// import { useEffect, useState } from 'react';
// import { Link, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Posts from './components/Posts';
// import './App.css';

// function App() {
//   const [user, setUser] = useState(false);

//   const handleLogout = () => {
//     setUser(false);
//     localStorage.removeItem('token');
//   };

//   useEffect(() => {
//     const isToken = localStorage.getItem('token');
//     if (isToken) setUser(true);
//   }, []);

//   return (
//     <>
//       <nav>
//         {!user ? (
//           <>
//             <Link to='/login'>Login</Link>
//             {'  |  '}
//             <Link to='/signup'>Signup</Link>
//           </>
//         ) : (
//           <button onClick={handleLogout}>Logout</button>
//         )}
//         {'  |  '}
//         <Link to='/posts'>Posts</Link>
//       </nav>
      // <Routes>
      //   {/* <Route path='/' element={<Login setUser={setUser} />} />
      //   <Route path='/login' element={<Login setUser={setUser} />} />
      //   <Route path='/signup' element={<Signup setUser={setUser} />} />
      //   <Route path='/posts' element={user ? <Posts /> : <Navigate to='/login' />} /> */}
      //   <Route path='/' element={<Navigate to='/login' />} />
      //   <Route path='/login' element={<Login setUser={setUser} />} />
      //   <Route path='/signup' element={<Signup setUser={setUser} />} />
      //   <Route path='/posts' element={user ? <Posts /> : <Navigate to='/login' />} />
      // </Routes>
//     </>
//   );
// }

// export default App;

// import { Route, Routes,} from 'react-router-dom';
// import './App.css';
// import Signup from './components/Signup';
// import Login from './components/Login'
// import Auth from './components/Auth';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Auth />} />
//       <Route path= '/signup' element={<Signup />} />
//       <Route path= '/login' element={<Login />} />
//       <Route path='/dashboard' element={<Dashboard />} />
//     </Routes>
//   )
// }

// export default App


import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import PokeList from './Pages/PokeList'
import PokeDetails from './components/PokeDetails'
import About from './Pages/About'
import Game from './Pages/Game'
import PokeBoard from './Pages/PokeBoard'
import PokeFight from './Pages/PokeFight'
import Signup from './components/Signup';
import Login from './components/Login'
import Auth from './components/Auth';
import Dashboard from './Pages/Dashboard';



function App() {
  return(
    <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path= '/signup' element={<Signup />} />
            <Route path= '/login' element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/pokemons" element={<PokeList />} />
            <Route path="/pokemons/:id" element={<PokeDetails />} />
            <Route path="/game" element={<Game />} />
            <Route path='/game/pokeboard' element={<PokeBoard />} />
            <Route path='/game/pokefight' element={<PokeFight />} />
            <Route path="/about" element={<About />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
 
}

export default App

