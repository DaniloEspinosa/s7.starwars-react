import { Routes, Route } from "react-router-dom";
import { StarshipsPage } from "../pages/Starships";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import { Home } from "../pages/Home";
import MainLayout from "../components/MainLayout";
import PrivateRoute from "../components/PrivateRoute";

export const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <MainLayout>
          <Home />
        </MainLayout>
      }
    />
    <Route
      path="/starships"
      element={
        <PrivateRoute>
          <MainLayout>
            <StarshipsPage />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
  </Routes>
);
