import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import { Login } from "../Pages/Login";

export function Router() {
 return (
    <Routes>
        <Route element={<Login />} path="/" />
    </Routes>
  );
}