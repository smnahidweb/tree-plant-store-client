import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TableCard from './TableCard';
import NextWatering from '../Components/NextWatering';
import { FaSort } from 'react-icons/fa';

const AllPlanst = () => {
  const initialData = useLoaderData();
  const [plantsData, setPlantsData] = useState(initialData);

  const handleSort = () => {
    const sortedPlants = [...plantsData].sort((a, b) => {
      return new Date(a.nextWatering) - new Date(b.nextWatering);
    });
    setPlantsData(sortedPlants); 
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center items-center mb-2">
        <button onClick={handleSort} className="btn  mt-4 bg-green-600 text-white">
        <FaSort size={24} />  Sort by Next Watering
        </button>
      </div>

      <table className="min-w-full divide-y divide-green-200 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Image</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Category</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Care Level</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Watering</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Health</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">User</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">View</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-700">
          {
            plantsData.map((data, index) => (
              <TableCard
                key={index}
                data={data}
                plantsData={plantsData}
                setPlantsData={setPlantsData}
              />
            ))
          }
        </tbody>
      </table>
      
      <NextWatering />
    </div>
  );
};

export default AllPlanst;
