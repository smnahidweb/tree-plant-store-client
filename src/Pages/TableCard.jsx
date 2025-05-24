import React from 'react';
import { NavLink } from 'react-router';

const TableCard = ({ data }) => {
  const {
    _id,
    image,
    category,
    name,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName,
  } = data;

  return (
    <tr className="hover:bg-green-50 transition">
      <td className="px-6 py-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md border"
        />
      </td>
      <td className="px-6 py-4 font-medium text-green-800">{name}</td>
      <td className="px-6 py-4 ">{category}</td>
      <td className="px-6 py-4">{careLevel}</td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span>Every: {wateringFrequency}</span>
          <span>Last: {lastWatered}</span>
          <span>Next: {nextWatering}</span>
        </div>
      </td>
      <td className="px-6 py-4">{healthStatus}</td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="font-semibold">{userName}</span>
          <span className="text-xs text-gray-500">{userEmail}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <NavLink to={`/plants/${_id}`}>
          <button className="btn bg-green-600 text-white">View</button>
        </NavLink>
      </td>
    </tr>
  );
};

export default TableCard;
