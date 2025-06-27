import React, { useEffect } from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Newsletter = () => {
   useEffect(() => {
      AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });
    }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    if (name && email) {
      Swal.fire({
        icon: 'success',
        title: 'Subscribed!',
        text: `Thanks, ${name}! You've successfully joined our newsletter.`,
        confirmButtonColor: '#22c55e',
      });
      form.reset();
    }
  };

  return (
    <section className="py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto bg-green-50 shadow-xl rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <div className="relative w-full max-w-md">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="relative w-full max-w-md">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
