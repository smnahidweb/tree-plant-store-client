import React from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const subscriber = { name, email };

    fetch('http://localhost:3000/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriber),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: `Thanks, ${name}! You've successfully joined our newsletter.`,
            confirmButtonColor: '#22c55e',
          });
          form.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Subscription Failed',
            text: 'Something went wrong. Please try again later.',
            confirmButtonColor: '#ef4444',
          });
        }
      });
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto bg-green-50 shadow-2xl rounded-3xl p-10 md:p-16 text-center">
        <p className="text-sm uppercase text-green-600 font-medium tracking-widest mb-2">
          Join the Green Movement
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-base">
          Stay in the loop with exclusive updates, new arrivals, and plant care tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <div className="relative w-full max-w-md">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <div className="relative w-full max-w-md">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
