import React from 'react';
import { Link } from 'react-router';
import { GiWaterDrop } from 'react-icons/gi';

const TableCard = ({ data }) => {
  const { _id, name, category, nextWatering, image } = data;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm mx-auto hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-bold text-green-700 mb-1">{name}</h3>

      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium text-green-600">Category:</span> {category}
      </p>

      <div className="flex items-center text-sm text-gray-500 mb-3">
        <GiWaterDrop className="text-blue-500 mr-1" />
        <span className="text-blue-600">Next Watering:</span> {nextWatering}
      </div>

      <Link
        to={`/plants/${_id}`}
        className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-xl transition duration-300 shadow-sm"
      >
        View Details
      </Link>
    </div>
  );
};

export default TableCard;
