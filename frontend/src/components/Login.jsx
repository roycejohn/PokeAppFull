
// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const navigate = useNavigate ()

//   Axios.defaults.withCredentials = true;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Axios.post('http://localhost:4000/auth/login',{
     
//       email,
//       password,
//     }).then(response =>{
//       // console.log(response)
//       if(response.data.status){
//         navigate('/')
//       }
      
//     }).catch(err => {
//       console.log(err)
//     })
//   }

//   return (
//     <div className="sign-up-container">
//       <h2>Log in</h2>
//       <form className="sign-up-form" onSubmit={handleSubmit}>
        
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           autoComplete="off"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         <p>Dont have an account?</p> <Link to='/signup'>Sign Up</Link>
//       </form>
//     </div>
//   );
// }; 

// export default Login;

import { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const username = location.state?.username;

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/auth/login', {
      email,
      password,
    }).then(response => {
      if (response.data.status) {
        navigate('/home', { state: { username: response.data.username } });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  console.log('Location state:', location.state);

  return (
    <div className="sign-up-container">
      {username && <p>Welcome, {username}, please log in!</p>}
      <h2>Log in</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Dont have an account?</p> <Link to='/signup'>Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
