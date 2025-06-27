import React from 'react';
import { NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const TableCard = ({ data }) => {
  const {
    _id,
    image,
    name,
    category,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName,
  } = data;

  return (
    <div
      data-aos="fade-up"
      className="max-w-sm w-full bg-gradient-to-br from-green-100 via-white to-green-200 rounded-3xl border border-green-300 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col h-[550px]"
    >
      {/* Image and Category Badge */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-t-3xl"
        />
        <span
          className="absolute top-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase cursor-help"
          data-tooltip-id={`category-tooltip-${_id}`}
          data-tooltip-content="This is the plant category"
        >
          {category}
        </span>
        <Tooltip id={`category-tooltip-${_id}`} place="bottom" />
      </div>

      {/* Card Body */}
      <div className="p-5 text-gray-800 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-bold text-green-600 tracking-tight mb-2">{name}</h2>

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 bg-green-50 p-3 rounded-xl shadow-inner mb-3">
            <div
              data-tooltip-id={`care-tooltip-${_id}`}
              data-tooltip-content="Care level: Easy, Moderate, or Hard"
              className="cursor-help"
            >
              <span className="font-semibold text-green-700">Care:</span><br />{careLevel}
              <Tooltip id={`care-tooltip-${_id}`} place="top" />
            </div>
            <div
              data-tooltip-id={`health-tooltip-${_id}`}
              data-tooltip-content="Health status of the plant"
              className="cursor-help"
            >
              <span className="font-semibold text-green-700">Health:</span><br />{healthStatus}
              <Tooltip id={`health-tooltip-${_id}`} place="top" />
            </div>
          </div>

          {/* Watering Info */}
          <div className="text-xs text-gray-700 space-y-1 mb-3">
            <p><span className="font-semibold text-green-700">Watering:</span> {wateringFrequency}</p>
            <p><span className="font-semibold text-green-700">Last:</span> {lastWatered}</p>
            <p><span className="font-semibold text-green-700">Next:</span> {nextWatering}</p>
          </div>

          {/* User Info */}
          <div className="text-xs text-gray-700">
            <p><span className="font-semibold text-green-700">By:</span> {userName}</p>
            <p>{userEmail}</p>
          </div>
        </div>

        {/* View Button */}
        <div className="mt-4">
          <NavLink
            to={`/plants/${_id}`}
            className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-xl transition duration-300 shadow-md"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
