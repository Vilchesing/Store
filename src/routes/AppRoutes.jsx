import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../features/home/pages/HomePage.jsx";
import { LoginPage } from "../features/auth/pages/LoginPage.jsx";
import { Register } from "../features/auth/pages/RegisterPage.jsx";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfil" element={<HomePage />} />
    </Routes>
  )
}