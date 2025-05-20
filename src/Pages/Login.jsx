import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const {Login,LoginWithGoogle,user,setUser} = useContext(AuthContext)
  const HandleLogin = (e) =>{
     e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      Swal.fire({
  title: "Logged In Successfully",
  icon: "success",
  draggable: true
});
    })
    .catch(error => {
      console.log(error.code)
      Swal.fire({
              title: 'Error!',
              text: error.message,
              icon: 'error',
              confirmButtonColor: '#ef4444',
            });
    })
  }

 const handleLoginWithGoogle = (e) => {
  e.preventDefault();

  LoginWithGoogle()
    .then(result => {
      const user = result.user;
      setUser(user);

      Swal.fire({
        title: 'Logged in successfully!',
        text: `Welcome back, ${user.displayName || 'User'}!`,
        icon: 'success',
        confirmButtonColor: '#16a34a',
        confirmButtonText: 'Continue',
      });

      Navigate('/');
    })
    .catch(error => {
      console.error('Google login error:', error.code);

      Swal.fire({
        title: 'Login Failed!',
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#ef4444',
      });
    });
};

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
    <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Login</h2>

    <form  onSubmit={HandleLogin} className="space-y-5">
   
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email" name='email'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="you@example.com"
        />
      </div>

    
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password" name='password'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="••••••••"
        />
      </div>

      
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Login
      </button>
    </form>

    
    <div className="flex items-center my-6">
      <hr className="flex-grow border-gray-300" />
      <span className="mx-3 text-gray-500 text-sm">or</span>
      <hr className="flex-grow border-gray-300" />
    </div>

   
    <button onClick={handleLoginWithGoogle}
      type="button"
      className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
    >
    
     <FaGoogle size={24} /> <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
    <p className='py-2 mt-2'>Dont HaVe an Account? <NavLink className="text-green-500" to="/register">Register</NavLink> </p>
  </div>
  
</div>

        </div>
    );
};

export default Login;