import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,Logout} = useContext(AuthContext)
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
      user ? <button onClick={HandleLogOut} className="btn bg-green-600 text-white" >Log out</button> : <NavLink className="btn bg-green-600 text-white"  to={"/login"}>Log in</NavLink>
    }
  </div>
</div>
    );
  }


export default Navbar;