import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../app/authReducer';

const PublicRouters = () => {
    const isAuthenticated = useSelector(authSelector);
    return isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
};

export default PublicRouters;
