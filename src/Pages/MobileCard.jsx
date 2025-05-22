import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const MobileCard = ({ data }) => {
  const { loading } = useContext(AuthContext);

  const {
    _id,
    image,
    name,
    nextWatering,
    healthStatus,
  } = data;

  if (loading) return <Loading />;

  return (
    <table className="min-w-full table-auto border-collapse">
  <thead className="hidden md:table-header-group bg-green-600 text-white text-sm">
    <tr>
      <th className="px-4 py-2 text-left">Image</th>
      <th className="px-4 py-2 text-left">Name</th>
      <th className="px-4 py-2 text-left">Health</th>
      <th className="px-4 py-2 text-left">Next Watering</th>
      <th className="px-4 py-2 text-left">Action</th>
    </tr>
  </thead>

  <tbody>
    <tr className="block md:table-row border border-green-200 rounded-xl shadow-lg md:shadow-none md:rounded-none mb-4 md:mb-0 bg-green-50 hover:bg-green-100 transition-all duration-300">
      
     
      <td className="block md:table-cell px-4 py-3">
        <span className="md:hidden text-xs font-semibold text-green-700 block mb-1">Image</span>
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md border-2 border-green-400 mx-auto md:mx-0"
        />
      </td>

      <td className="block md:table-cell px-4 py-3">
        <span className="md:hidden text-xs font-semibold text-green-700 block mb-1">Name</span>
        <p className="text-sm font-medium text-green-900">{name}</p>
      </td>

    
      <td className="block md:table-cell px-4 py-3">
        <span className="md:hidden text-xs font-semibold text-green-700 block mb-1">Health</span>
        <p className={`text-sm font-semibold text-green-500`}>
          {healthStatus}
        </p>
      </td>

      
      <td className="block md:table-cell px-4 py-3">
        <span className="md:hidden text-xs font-semibold text-green-700 block mb-1">Next Watering</span>
        <p className="text-sm text-green-800">{nextWatering}</p>
      </td>

     
      <td className="block md:table-cell px-4 py-3 text-center md:text-left">
        <span className="md:hidden text-xs font-semibold text-green-700 block mb-1">Action</span>
        <NavLink to={`/plants/${_id}`}>
          <button className="btn btn-sm w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md transition">
            View
          </button>
        </NavLink>
      </td>
    </tr>
  </tbody>
</table>
  );
};

export default MobileCard;
