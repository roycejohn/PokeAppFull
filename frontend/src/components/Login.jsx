// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setUser }) => {
//   const [formValues, setFormValues] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError(null);
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:4000/user/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formValues),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }


//       const data = await response.json();
//       localStorage.setItem('token', data.token);
//       setUser(true);
//       navigate('/posts');
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Log in</h2>
//       <label htmlFor='email'>Email</label>
//       <input type='text' name='email' id='email' value={formValues.email} onChange={handleInput} />
//       <br />
//       <label htmlFor='password'>Password</label>
//       <input type='password' name='password' id='password' value={formValues.password} onChange={handleInput} /> <br />
//       <button disabled={loading}>Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;



import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate ()

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/auth/login',{
     
      email,
      password,
    }).then(response =>{
      // console.log(response)
      if(response.data.status){
        navigate('/')
      }
      
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="sign-up-container">
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
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Dont have an account?</p> <Link to='/signup'>Sign Up</Link>
      </form>
    </div>
  );
}; 

export default Login;