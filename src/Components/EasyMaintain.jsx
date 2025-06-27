import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiWaterDrop } from 'react-icons/gi';

const EasyMaintain = () => {
  const [easyCarePlants, setEasyCarePlants] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    fetch('https://plant-tree-store-server.vercel.app/plants')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (plant) => plant.careLevel?.toLowerCase() === 'easy'
        );
        setEasyCarePlants(filtered);
      });
  }, []);

  const visiblePlants = showAll ? easyCarePlants : easyCarePlants.slice(0, 8);

  return (
    <section data-aos="fade-up" className="py-12 px-6 max-w-7xl mx-auto rounded-2xl">
      <h2 className="text-4xl font-bold text-green-600 mb-4 text-center">Easy-Care Favorites</h2>
      <p className="text-center text-[var(--TEXT-COLOR)] mb-8 max-w-xl mx-auto">
        These plants are perfect for beginners or those who prefer low-maintenance greenery.
      </p>

      {easyCarePlants.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No easy-care plants found.</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visiblePlants.map((plant) => (
              <div
                key={plant._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between w-full h-[420px]"
              >
                <img
                  src={plant.image || 'https://via.placeholder.com/300'}
                  alt={plant.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-green-600">{plant.name}</h3>
                  <span
                    className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full cursor-help"
                    data-tooltip-id={`easycare-tooltip-${plant._id}`}
                    data-tooltip-content="These plants need little care — great for beginners!"
                  >
                    Easy Care
                  </span>
                  <Tooltip id={`easycare-tooltip-${plant._id}`} place="top" />
                </div>

                <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                  {plant.description || 'No description available.'}
                </p>

                <div
                  className="text-xs text-gray-500 cursor-help mb-2 flex items-center gap-1"
                  data-tooltip-id={`watering-tooltip-${plant._id}`}
                  data-tooltip-content="Scheduled date to water the plant next"
                >
                  <GiWaterDrop className="text-blue-500 text-xl" aria-label="Watering icon" />
                  <span className="text-blue-600 font-medium">Next Watering:</span> {plant.nextWatering}
                  <Tooltip id={`watering-tooltip-${plant._id}`} place="bottom" />
                </div>

                <NavLink to={`/plants/${plant._id}`}>
                  <button
                    className="btn bg-green-600 w-full text-white"
                    aria-label={`View details of ${plant.name}`}
                  >
                    View
                  </button>
                </NavLink>
              </div>
            ))}
          </div>

          {easyCarePlants.length > 8 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn btn-wide mt-10 bg-green-600 text-white"
                aria-expanded={showAll}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default EasyMaintain;
