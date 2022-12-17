import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Ready from '../pages/Ready';
import Challenge from '../pages/Challenge';
import Success from '../pages/Success';
import Rank from '../pages/Rank';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Layout from '../layout';
import { login, signOut } from '../app/authReducer';

const publicRoutes = [
    {
        path: '/',
        component: <Home />,
        restrict: true,
    },
];

const privateRoutes = [
    {
        path: '/login',
        component: <Login />,
        restrict: true,
    },
    {
        path: '/ready',
        component: <Ready />,
        restrict: true,
    },
    {
        path: '/challenge',
        component: <Challenge />,
        restrict: true,
    },
    {
        path: '/success',
        component: <Success />,
        restrict: true,
    },
];

const RouterComponent = () => {
    // const token = JSON.parse(localStorage.getItem('token'));
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!parseJwt(token) || parseJwt(token)?.exp < Date.now() / 1000) {
    //         dispatch(signOut());
    //     }
    // }, [dispatch, token]);
    const queryString = window.location.search;

    useEffect(() => {
        const urlParams = new URLSearchParams(queryString);
        const token = urlParams.get('token');
        // const token = location.search.split('token=')[1];

        if (token || localStorage.getItem('token')) {
            if (token) localStorage.setItem('token', JSON.stringify(token));
            dispatch(login());
        } else {
            dispatch(signOut());
        }
    }, [location]);

    return (
        <Layout>
            <Routes>
                <Route path="/rank" element={<Rank />} restrict={true} />
                <Route element={<PrivateRoute />}>
                    {privateRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.component} restrict={route.restrict} />
                    ))}
                </Route>
                <Route element={<PublicRoute />}>
                    {publicRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.component} restrict={route.restrict} />
                    ))}
                </Route>
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </Layout>
    );
};

export default RouterComponent;
