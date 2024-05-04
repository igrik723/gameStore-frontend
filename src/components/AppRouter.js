import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import Popular from "../pages/Popular";

const AppRouter = () => {
    const isAuth  = true
    return ( 
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Navigate to='/shop'/>}/>
        </Routes>
     );
}

export default AppRouter;