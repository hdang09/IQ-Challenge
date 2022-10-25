import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Ready from '../pages/Ready';
import Success from '../pages/Success';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const publicRoute = [
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
];

const privateRoute = [
    {
        path: '/',
        component: <Home />,
        restrict: true,
    },
    {
        path: '/success',
        component: <Success />,
        restrict: true,
    },
];

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    {privateRoute.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                            restrict={route.restrict}
                        />
                    ))}
                </Route>
                <Route element={<PublicRoute />}>
                    {publicRoute.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                            restrict={route.restrict}
                        />
                    ))}
                </Route>
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
