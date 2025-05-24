import React from 'react';

const PlanGuide = () => {
    return (
        <div className="  py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    <div className="  rounded-2xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6 text-center">
        How to Choose the Right Plant for Your Space
      </h1>
      <p className="text-lg  mb-8 text-center max-w-3xl mx-auto">
        Picking the perfect plant depends on light, space, care level, and your lifestyle. Here's how to find your match:
      </p>

      <div className="space-y-8">
       
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-2">1. Consider Lighting</h2>
          <p className="">
            Identify if your room is low-light, medium, or bright. Succulents and cacti need bright light, while snake plants thrive in low light.
          </p>
        </div>

      
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-2">2. Space Size</h2>
          <p className="">
            Small plants (like peace lilies) are great for desks. Large spaces? Try monsteras or rubber plants.
          </p>
        </div>

        
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-2">3. Care Level</h2>
          <p className="">
            Busy lifestyle? Go for low-maintenance plants like ZZ plants. Want a challenge? Try bonsai or orchids.
          </p>
        </div>

        
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-2">4. Pet-Friendly?</h2>
          <p className="">
            If you have pets, avoid toxic plants. Spider plants and areca palms are safe options.
          </p>
        </div>

      
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-2">5. Indoor vs. Outdoor</h2>
          <p className="">
            Indoor plants prefer stable temperatures. Outdoor ones need good drainage and seasonal care.
          </p>
        </div>
      </div>

    
      <div className="mt-12 text-center">
        <a
          href="/shop"
          className="inline-block bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 px-8 rounded-xl shadow-md"
        >
           Shop Plants Now
        </a>
      </div>
    </div>
  </div>
</div>

    );
};

export default PlanGuide;