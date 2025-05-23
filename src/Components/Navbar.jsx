import React, { useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Navbar = () => {
  const {user,Logout} = useContext(AuthContext)
  const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-colors: light)").matches?"light":"dark")
  const logo = "https://i.ibb.co/v4qfB40Y/plant5-modified.png"
useEffect( () => {

localStorage.setItem("theme",theme)
document.documentElement.setAttribute("data-theme",theme)

},[theme] )


const handleThemeToggle = (e) =>{
setTheme(e.target.checked? "dark": "light" )
}

 
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
    <div className='w-8 h-8 rounded-4xl'>
      <img src={logo} alt="" />
    </div>
    <a className="btn btn-ghost text-2xl font-bold font-poppins text-green-600">TreePlant </a>
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

  
     
        {/* <input type="checkbox" name="" id=""  className='toggle' onChange={handleThemeToggle} checked={theme==="dark"} /> */}

         <label className="cursor-pointer w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1 transition-colors duration-300 relative">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleThemeToggle}
            className="sr-only"
          />
          <div
            className={`absolute w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-300 ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
          <div className="absolute left-1 text-gray-600 dark:text-white">
            <Sun size={16} />
          </div>
          <div className="absolute right-1 text-gray-600 dark:text-yellow-300">
            <Moon size={16} />
          </div>
        </label>
    {
      user ? <button onClick={HandleLogOut} className="btn bg-green-600 text-white" >Log out</button> : <NavLink className="btn bg-green-600 text-white"  to={"/login"}>Log in</NavLink>
    }
  </div>
</div>


    );
  }


export default Navbar;