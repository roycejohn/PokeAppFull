// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     axios.defaults.withCredentials = true;

//     useEffect(() => {
//         axios.get('http://localhost:4000/auth/verify')
//             .then(res => {
//                 if (res.data.status) {
//                     setLoading(false);
//                 } else {
//                     navigate('/');
//                 }
//             })
//             .catch(error => {
//                 console.error("Error verifying user:", error);
//                 setError("Error verifying user");
//                 navigate('/');
//             });
//     }, [navigate]); 

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>Dashboard</div>
//     );
// }

// export default Dashboard;


import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <div>Dashboard</div>
        </ProtectedRoute>
    );
};

export default Dashboard;

