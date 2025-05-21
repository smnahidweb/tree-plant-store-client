import React, { useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useTheme } from '../Provider/ThemeProvider';

const Navbar = () => {
  const {user,Logout} = useContext(AuthContext)
  const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-colors: light)").matches?"light":"dark")

useEffect( () => {

localStorage.setItem("theme",theme)
document.documentElement.setAttribute("data-theme",theme)

},[theme] )


const handleThemeToggle = (e) =>{
setTheme(e.target.checked? "dark": "light" )
}

  const { darkMode, setDarkMode } = useTheme();
   const links = <>
    
   <li> <NavLink to={'/'}>Home</NavLink></li>
   <li> <NavLink to={'/allPlants'}>All Plants</NavLink></li>
   <li> <NavLink to={'/addPlants'}>Add Plants</NavLink></li>
   <li> <NavLink to={'/myPlants'}>My Plants</NavLink></li>
    <li> <NavLink to={'/register'}>Register</NavLink></li>

    
    </>

const HandleLogOut = () => {
  Logout()
    .then(() => {
      
     
      Swal.fire({
        title: "Logged Out Successfully",
        icon: "success",
        draggable: true
      });
    })
    .catch((error) => {
      console.log(error.message);
      
    });
};
 return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Plant Tree Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user &&  <div className="relative group mr-8 mt-2 z-50">
  <img
    className="w-10 h-10 rounded-full cursor-pointer"
    src={user.photoURL}
    alt="Profile"
  />
  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-4 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap max-w-xs text-center z-50 shadow-lg">
    {user?.displayName}
  </div>
</div>
  }

  
     {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}
        <input type="checkbox" name="" id=""  className='toggle' onChange={handleThemeToggle} checked={theme==="dark"} />
    {
      user ? <button onClick={HandleLogOut} className="btn bg-green-600 text-white" >Log out</button> : <NavLink className="btn bg-green-600 text-white"  to={"/login"}>Log in</NavLink>
    }
  </div>
</div>


    );
  }


export default Navbar;