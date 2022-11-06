import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import jwtDecode from 'jwt-decode';
import { authSelector } from '../app/authReducer';

const PublicRouters = () => {
    const isAuthenticated = useSelector(authSelector);
    // if (localStorage.getItem('token')) {
    //     let { role } = jwtDecode(localStorage.getItem('token')).payload;
    //     return role === '1' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />;
    // }
    return isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
};

export default PublicRouters;
