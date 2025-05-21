import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = true; // Aquí iría tu lógica de autenticación

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute; 