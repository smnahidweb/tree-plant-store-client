import React from 'react';

const PlanGuide = () => {
    return (
        <div>
             <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-green-700">How to Choose the Right Plant for Your Space</h1>
      <p className="mb-4">Picking the perfect plant depends on light, space, care level, and your lifestyle. Here's how to find your match:</p>

      <h2 className="text-xl font-semibold text-green-600 mt-6">1. Consider Lighting</h2>
      <p>Identify if your room is low-light, medium, or bright. Succulents and cacti need bright light, while snake plants thrive in low light.</p>

      <h2 className="text-xl font-semibold text-green-600 mt-6">2. Space Size</h2>
      <p>Small plants (like peace lilies) are great for desks. Large spaces? Try monsteras or rubber plants.</p>

      <h2 className="text-xl font-semibold text-green-600 mt-6">3. Care Level</h2>
      <p>Busy lifestyle? Go for low-maintenance plants like ZZ plants. Want a challenge? Try bonsai or orchids.</p>

      <h2 className="text-xl font-semibold text-green-600 mt-6">4. Pet-Friendly?</h2>
      <p>If you have pets, avoid toxic plants. Spider plants and areca palms are safe options.</p>

      <h2 className="text-xl font-semibold text-green-600 mt-6">5. Indoor vs. Outdoor</h2>
      <p>Indoor plants prefer stable temperatures. Outdoor ones need good drainage and seasonal care.</p>

      <div className="mt-8 text-center">
        <a href="/shop" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
          Shop Plants Now
        </a>
      </div>
    </div>
        </div>
    );
};

export default PlanGuide;