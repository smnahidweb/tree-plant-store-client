import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import axios from 'axios';

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const { name, email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim()) {
      return Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please enter both your name and email.',
        confirmButtonColor: '#22c55e',
      });
    }

    if (!emailRegex.test(email)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#22c55e',
      });
    }

    try {
      const res = await axios.post('https://plant-tree-store-server.vercel.app/newsletter', { name, email });

      if (res.data.insertedId || res.data.acknowledged) {
        Swal.fire({
          icon: 'success',
          title: 'Subscribed Successfully',
          text: `Thanks ${name}, you're now subscribed!`,
          confirmButtonColor: '#22c55e',
        });
        setFormData({ name: '', email: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Subscription Failed',
          text: 'Please try again later.',
          confirmButtonColor: '#22c55e',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: error.response?.data?.message || 'Could not complete subscription.',
        confirmButtonColor: '#22c55e',
      });
    }
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto bg-green-50 bg-opacity-90 backdrop-blur-md shadow-2xl rounded-3xl p-10 md:p-16 text-center" data-aos="fade-up">
        <p className="text-sm uppercase text-green-600 font-medium tracking-widest mb-2">Join the Green Movement</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-base">
          Stay in the loop with exclusive updates, new arrivals, and plant care tips.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col gap-4 items-center">
          <div className="relative w-full max-w-md">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
            />
          </div>

          <div className="relative w-full max-w-md">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition shadow-md hover:shadow-lg"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
