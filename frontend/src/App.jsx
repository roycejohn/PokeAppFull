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

import { Route, Routes,} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path= '/signup' element={<Signup />} />
      <Route path= '/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App

