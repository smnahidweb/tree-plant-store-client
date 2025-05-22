import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({plant}) => {
 
     const {
    image,
    name,
    category,
    careLevel,
    healthStatus,
    _id 
  } = plant;
 
    return (
        <div>
            <div className="max-w-sm mx-auto bg-gradient-to-br from-green-100 via-white to-green-200 backdrop-blur-md rounded-3xl border border-green-300 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-t-3xl"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase">
          {category}
        </span>
      </div>

      <div className="p-5 text-gray-800">
        <h2 className="text-xl font-bold text-green-800 tracking-tight mb-1">{name}</h2>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mt-2 bg-green-50 p-3 rounded-xl shadow-inner">
          <div>
            <span className="font-semibold text-green-700">Care:</span><br />{careLevel}
          </div>
          <div>
            <span className="font-semibold text-green-700">Health:</span><br />{healthStatus}
          </div>
        </div>

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
        </div>
    );
};

export default HomeCard;