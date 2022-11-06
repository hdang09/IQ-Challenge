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
    const dispatch = useDispatch();
    dispatch(login());

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
