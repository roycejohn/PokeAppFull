// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ setUser }) => {
//   const [formValues, setFormValues] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleInput = (e) => {
//     setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError(null);
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:4000/user/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formValues),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to signup');
//       }

//       const data = await response.json();
//       localStorage.setItem('token', data.token);
//       setUser(true);
//       navigate('/posts');

//       console.log(data);
//     } catch (error) {
//       console.log(error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Signup</h2>
//       <label htmlFor='email'>Email</label>
//       <input type='text' name='email' id='email' value={formValues.email} onChange={handleInput} />
//       <br />
//       <label htmlFor='password'>Password</label>
//       <input type='password' name='password' id='password' value={formValues.password} onChange={handleInput} /> <br />
//       <button disabled={loading}>Signup</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Signup;

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate ()
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/auth/signup',{
      username,
      email,
      password,
    }).then(response =>{
      // console.log(response)
      if(response.data.status){
        navigate('/login')
      }
      
    }).catch(err => {
      console.log(err)
    })
  }

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
        <button type="submit">Sign Up</button>
        <p>Already have an account?</p> <Link to='/login'>Login</Link>
      </form>
    </div>
  );
};

export default Signup;
