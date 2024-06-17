// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const navigate = useNavigate ()
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:4000/auth/signup',{
//       username,
//       email,
//       password,
//     }).then(response =>{
//       // console.log(response)
//       if(response.data.status){
//         navigate('/login')
//       }
      
//     }).catch(err => {
//       console.log(err)
//     })
//   }

//   return (
//     <div className="sign-up-container">
//       <h2>Sign up</h2>
//       <form className="sign-up-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//         />
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
//           placeholder="******"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//         <p>Already have an account?</p> <Link to='/login'>Login</Link>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     axios.post('http://localhost:4000/auth/signup', {
//       username,
//       email,
//       password,
//     }).then(response => {
//       console.log('Response received:', response);
//       if (response.data.status) {
//         console.log('Signup successful');
//         navigate('/login', { state: { username: username } });
//       } else {
//         console.log('Signup failed:', response.data);
//       }
//     }).catch(err => {
//       console.log('Error:', err);
//     });
//   }

//   return (
//     <div className="sign-up-container">
//       <h2>Sign up</h2>
//       <form className="sign-up-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//         />
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
//           placeholder="******"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//         <p>Already have an account?</p> <Link to='/login'>Login</Link>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/signup', {
        username,
        email,
        password,
      });

      if (response.data.status) {
        // Signup successful
        console.log('Signup successful');
        // Redirect to login page with success message
        navigate('/login', { state: { username: username, signupSuccess: true } });
      } else {
        // Signup failed
        setErrorMessage('Signup failed. Please check your details and try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
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
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
