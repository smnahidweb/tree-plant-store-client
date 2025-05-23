import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router'; // make sure you're using react-router-dom
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';

const Register = () => {
  const { CreateUser, UpdateProfileInfo, setUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(); // Get auth instance to access currentUser

  const HandleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 6 characters, include uppercase and lowercase letters.'
      );
      return;
    }

    CreateUser(email, password)
      .then(() => {
        return UpdateProfileInfo({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        // Set user using latest Firebase currentUser
        const currentUser = auth.currentUser;
        setUser({ ...currentUser });

        Swal.fire({
          title: 'Account Created Successfully!',
          icon: 'success',
          confirmButtonColor: '#16a34a',
          confirmButtonText: 'Continue',
        });

        navigate('/');
      })
      .catch((error) => {
        console.error('Registration Error:', error.message);
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md  p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Register</h2>

        <form onSubmit={HandleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium  mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              required
            />
          </div>

          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}

          <button
            type="submit" 
            className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <p className="py-2 text-center">
          Have an Account?{' '}
          <NavLink className="text-green-500" to="/login">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
