import React from 'react';
import image from '../assets/login.svg';
import { NavLink, Outlet } from 'react-router'; // ✅ Correct import
import { AiOutlineHome } from 'react-icons/ai';

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Side - Header + Form */}
      <div className="flex flex-col justify-center px-6 relative">
        
        {/* Top Left Header */}
        <NavLink to="/" className="absolute top-4 left-6 flex items-center gap-2 group">
          <AiOutlineHome className="text-2xl text-green-600 group-hover:text-green-800 transition-colors duration-200" />
          <span className="text-2xl font-bold text-green-700 tracking-wide group-hover:text-green-900 transition-colors duration-200">
            TreePlant
          </span>
        </NavLink>

        {/* Auth Form Content */}
        <div className="w-full max-w-md mx-auto  p-8 rounded-xl">
          <Outlet />
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden md:flex items-center justify-center p-10">
        <img
          src={image}
          alt="Auth Visual"
          className="w-4/5 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
