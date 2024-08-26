import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouters = ({ children }) => {
    const { user, loading } = useContext();

    if (loading) {
        return <>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouters;