import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import { AuthContext } from '../context';
import {privateRoutes, publicRoutes} from "../routes/router"

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
            <Routes>
                {isAuth ? privateRoutes.map(route => 
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact} />)
                : publicRoutes.map(pub => 
                    <Route key={pub.path} element={pub.element} path={pub.path} exact={pub.exact} />)
                }
            </Routes>
    );
};

export default AppRouter;