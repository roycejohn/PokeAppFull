import axios from "axios"
import { Link, useNavigate} from "react-router-dom"


const Auth = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials= true;
    const handleLogout =() => {
        axios.get('http://localhost:4000/auth/logout')
        .then(res =>{
            if(res.data.status){
                navigate('/login')
            }
        }).catch (err=> {
            console.log(err)
        })
    }
  return (
    <div>
        AUTH
        <button><Link to='/dashboard'>Dashboard</Link></button>
        <br/>  <br/>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Auth