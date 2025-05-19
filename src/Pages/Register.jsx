import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const {CreateUser,setUser} = useContext(AuthContext)
  const HandleRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    
    CreateUser(email, password)
    .then(result => {
      const user = result.user;
      console.log('User created:', user);
      setUser(user)
      Swal.fire({
        title: 'Account Created Successfully!',
        icon: 'success',
        confirmButtonColor: '#16a34a',
        confirmButtonText: 'Continue',
      });
    })
    .catch(error => {
      console.error('Registration Error:', error.code);

      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#ef4444',
      });
    });
};
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
    <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Register</h2>

    <form onSubmit={HandleRegister} className="space-y-5">
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text" name='name'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your name"
        />
      </div>

    
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email" name='email'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="you@example.com"
        />
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
        <input
          type="url" name='photo'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="https://example.com/photo.jpg"
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
        Register
      </button>
    </form>
    <p className='py-2'>
    Have an Account? <NavLink className="text-green-500" to={'/login'} >Log in</NavLink> </p>
  </div>
</div>
    );
};

export default Register;