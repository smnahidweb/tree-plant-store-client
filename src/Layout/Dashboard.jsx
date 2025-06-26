import React from 'react';
import { Link, NavLink, Outlet } from 'react-router'; // ✅ Correct import
import { FaBars } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      {/* Toggle checkbox */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content area */}
      <div className="drawer-content flex flex-col">
        {/* Topbar for mobile */}
        <div className="w-full flex justify-between items-center p-4  text-white lg:hidden">
          <label htmlFor="dashboard-drawer" className="btn btn-ghost text-xl text-white">
            <FaBars />
          </label>
          <span className="font-bold text-lg">Dashboard</span>
        </div>

        {/* Dynamic page content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar menu */}
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
        <ul className="menu p-4 w-72 min-h-full text-base-content space-y-2 bg-green-400">

          {/* Home link */}
          <li>
            <NavLink to="/" className="flex items-center gap-2">
              <AiOutlineHome className="text-2xl text-white" />
              <span className="text-xl font-bold text-white">TreePlant</span>
            </NavLink>
          </li>

          {/* Dashboard Links */}
          <li className='text-white'>
            <NavLink to="/dashboard/myProfile" className="text-base font-medium">
             My Profile
            </NavLink>
          </li>
          <li className='text-white'>
            <NavLink to="/dashboard/myPlants" className="text-base font-medium">
              My Plants
            </NavLink>
          </li>
          <li className='text-white'>
            <NavLink to="/dashboard/addPlants" className="text-base font-medium">
              Add Plant
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
