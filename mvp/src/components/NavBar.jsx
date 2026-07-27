import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, User } from 'lucide-react';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Add', path: '/create-listing', icon: PlusCircle }, 
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <button 
            key={item.name}
            className={`nav-btn ${isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
            aria-label={item.name}
          >
            <Icon size={24} />
            <span>{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;