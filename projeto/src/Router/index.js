import React, { useContext } from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import { UserContext } from "../context/auth.js";


import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Skills } from "../Pages/Skills";
import { SkillCreate } from '../Pages/SkillCreate';

export function Router() {

  const Private = ({ children }) => {
    const{ authenticated, loading } = useContext(UserContext);
    if(loading) {
        return <div> Carregando </div>;
    }
    if(!authenticated) {
        return(
            <Navigate to="/"/>
        )
    }

    return children;
}

 return (
    <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Private><Home /></Private>} path="/home/:id" />
        <Route element={<Private><Skills /></Private>} path="/skills"/>
        <Route element={<Private><SkillCreate /></Private>} path="/skillcreate"/>
    </Routes>
  );
}