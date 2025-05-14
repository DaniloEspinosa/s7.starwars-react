import { Routes, Route } from "react-router-dom";
import { StarshipsPage } from "../pages/Starships";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import { Home } from "../pages/Home";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/starships" element={<StarshipsPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
  </Routes>
);

