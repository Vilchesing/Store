import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/auth/LoginPage.jsx";
import { Register } from "../pages/auth/RegisterPage";

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