// import axios from "axios"
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"


// const Dashboard = () => {
//     const navigate = useNavigate()
//     useEffect(() => {
//         axios.get('http://localhost:4001/auth/verify')
//         .then(res=> {
//             if (res.data.status) {

//             } else {
//                 navigate('/')
//             }
//         })
//     }), [])

//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:4000/auth/verify')
            .then(res => {
                if (res.data.status) {
                    // User is verified, you can handle any additional logic here
                    setLoading(false);
                } else {
                    navigate('/');
                }
            })
            .catch(error => {
                console.error("Error verifying user:", error);
                setError("Error verifying user");
                navigate('/');
            });
    }, [navigate]); // Dependency array should include 'navigate'

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>Dashboard</div>
    );
}

export default Dashboard;
