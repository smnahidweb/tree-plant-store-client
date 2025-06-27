// HomeCard.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiWaterDrop } from 'react-icons/gi';

const HomeCard = ({ plant, showWatering = false }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });
  }, []);

  const { image, name, category, careLevel, healthStatus, nextWatering, _id } = plant;

  return (
    <div
      data-aos="fade-up"
      className="bg-gradient-to-br from-green-100 via-white to-green-200 max-w-sm mx-auto rounded-2xl border border-green-300 shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover rounded-t-2xl" />
        <span
          className="absolute top-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase cursor-help"
          data-tooltip-id={`category-tooltip-${_id}`}
          data-tooltip-content="This is the plant category"
        >
          {category}
        </span>
        <Tooltip id={`category-tooltip-${_id}`} place="bottom" />
      </div>

      <div className="p-5 text-gray-800 flex flex-col justify-between h-full">
        <h2 className="text-xl font-bold text-green-600 mb-2">{name}</h2>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 bg-green-50 p-3 rounded-xl shadow-inner">
          <div
            className="cursor-help"
            data-tooltip-id={`care-tooltip-${_id}`}
            data-tooltip-content="Care level: Easy, Moderate, or Hard"
          >
            <span className="font-semibold text-green-700">Care:</span><br />{careLevel}
            <Tooltip id={`care-tooltip-${_id}`} place="top" />
          </div>
          <div
            className="cursor-help"
            data-tooltip-id={`health-tooltip-${_id}`}
            data-tooltip-content="Health status of the plant"
          >
            <span className="font-semibold text-green-700">Health:</span><br />{healthStatus}
            <Tooltip id={`health-tooltip-${_id}`} place="top" />
          </div>
        </div>

        {showWatering && nextWatering && (
          <div
            className="text-xs text-gray-600 mt-2 flex items-center gap-2 cursor-help"
            data-tooltip-id={`watering-tooltip-${_id}`}
            data-tooltip-content="Next watering schedule"
          >
            <GiWaterDrop className="text-blue-500 text-xl" />
            <span className="text-blue-600 font-medium">Next Watering:</span> {nextWatering}
            <Tooltip id={`watering-tooltip-${_id}`} place="bottom" />
          </div>
        )}

        <div className="mt-4">
          <Link
            to={`/plants/${_id}`}
            className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-xl transition duration-300 shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
