import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const data = useLoaderData();
    const { image,
    name,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName} = data;

    return (
       <div className="max-w-sm mx-auto bg-gradient-to-br from-green-100 via-white to-green-200 backdrop-blur-md rounded-3xl border border-green-300 shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 mt-8">
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
        <h2 className="text-2xl font-bold text-green-800 tracking-tight mb-2">{name}</h2>
        <p className="text-sm mb-3 italic text-gray-600">{description}</p>

        <div className="grid grid-cols-2 gap-3 text-xs text-gray-700 bg-green-50 p-3 rounded-xl shadow-inner">
          <div>
            <span className="font-semibold text-green-700">Care Level:</span>
            <br />{careLevel}
          </div>
          <div>
            <span className="font-semibold text-green-700">Watering:</span>
            <br />{wateringFrequency}
          </div>
          <div>
            <span className="font-semibold text-green-700">Last Watered:</span>
            <br />{lastWatered}
          </div>
          <div>
            <span className="font-semibold text-green-700">Next Watering:</span>
            <br />{nextWatering}
          </div>
          <div className="col-span-2">
            <span className="font-semibold text-green-700">Health Status:</span>
            <br />{healthStatus}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center bg-green-100 rounded-xl p-3 shadow">
          <div>
            <p className="text-sm font-bold text-green-800">{userName}</p>
            <p className="text-xs text-gray-500">{userEmail}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center text-white font-bold shadow-md">
            {userName ? userName[0].toUpperCase() : "?"}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Details;