import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:4000/auth/verify')
            .then(res => {
                if (res.data.status) {
                    setLoading(false);
                } else {
                    navigate('/login');
                }
            })
            .catch(error => {
                console.error("Error verifying user:", error);
                setError("Error verifying user");
                navigate('/login');
            });
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
