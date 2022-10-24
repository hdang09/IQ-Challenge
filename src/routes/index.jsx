import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const publicRoute = [
    {
        path: '/',
        component: <Home />,
        exact: true,
        restrict: true,
    },
];

const privateRoute = [
    {
        path: '/private',
        component: <Home />,
        exact: true,
        restrict: true,
    },
];

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact element={<PrivateRoute />}>
                    {privateRoute.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                            exact={route.exact}
                            restrict={route.restrict}
                        />
                    ))}
                </Route>
                <Route exact element={<PublicRoute />}>
                    {publicRoute.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                            exact={route.exact}
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
