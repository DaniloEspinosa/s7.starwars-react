import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
    <NavLink to="/starships" className={({ isActive }) => isActive ? 'active' : ''}>STARSHIPS</NavLink>
  </nav>
);

export default Navbar;