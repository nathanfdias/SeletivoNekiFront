import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";

export function Router() {
 return (
    <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/home" />
    </Routes>
  );
}