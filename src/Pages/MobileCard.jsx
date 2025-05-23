import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const MobileCard = ({ data }) => {
  const { loading } = useContext(AuthContext);

  const {
    _id,
   
    name,
    nextWatering,
    healthStatus,
  } = data;

  if (loading) return <Loading />;

  return (
 <table className="min-w-full table-auto border border-green-300 rounded-xl overflow-hidden shadow-md">
  <thead className="hidden md:table-header-group bg-green-600 text-white text-sm uppercase">
    <tr>
      <th className="border border-green-300 px-6 py-3 text-left">Name</th>
      <th className="border border-green-300 px-6 py-3 text-left">Next Watering</th>
      <th className="border border-green-300 px-6 py-3 text-left">Care</th>
      <th className="border border-green-300 px-6 py-3 text-center">Action</th>
    </tr>
  </thead>

  <tbody>
    <tr className="block md:table-row md:border-none bg-white hover:bg-green-50 transition duration-300 ease-in-out border rounded-lg md:rounded-none mb-4 md:mb-0">
      
      
      <td className="block md:table-cell border border-green-200 px-6 py-4 text-sm text-green-900 font-medium">
        <span className="md:hidden block text-xs font-semibold text-green-600 mb-1">Name</span>
        {name}
      </td>

      
      <td className="block md:table-cell border border-green-200 px-6 py-4 text-sm text-green-800">
        <span className="md:hidden block text-xs font-semibold text-green-600 mb-1">Next Watering</span>
        {nextWatering}
      </td>

   
      <td className="block md:table-cell border border-green-200 px-6 py-4 text-sm text-green-700">
        <span className="md:hidden block text-xs font-semibold text-green-600 mb-1">Care</span>
        {healthStatus}
      </td>

      
      <td className="block md:table-cell border border-green-200 px-6 py-4 text-center">
        <Link
          to={`/plants/${_id}`}
          className="inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition duration-300 shadow"
        >
          View Details
        </Link>
      </td>
    </tr>
  </tbody>
</table>




  );
};

export default MobileCard;
