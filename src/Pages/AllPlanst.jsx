import React, { useContext, useState,useEffect } from 'react';
import { useLoaderData } from 'react-router';
import TableCard from './TableCard';
import MobileCard from './MobileCard';
import NextWatering from '../Components/NextWatering';
import { FaSort } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllPlanst = () => {
  const initialData = useLoaderData();
  const [plantsData, setPlantsData] = useState(initialData);
  const { loading } = useContext(AuthContext);
   useEffect(() => {
       AOS.init({
         duration: 1000,
         once: true,
         offset: 120,          
         easing: 'ease-in-out' 
       });
     }, []);

  const handleSort = async () => {
  try {
    const res = await fetch('https://plant-tree-store-server.vercel.app/plants?sortBy=nextWatering&order=asc');
    const sorted = await res.json();
    setPlantsData(sorted);
  } catch (err) {
    console.error('Error fetching sorted data', err);
  }
}

  if (loading) return <Loading />;
 

  return (
    <div className="overflow-x-auto px-4">
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={handleSort}
          className="btn mt-4 bg-green-600 text-white flex items-center gap-2"
        >
          <FaSort size={18} /> Sort by Next Watering
        </button>
      </div>

      {/* Table view for medium and up */}
      <table className="hidden md:table w-full divide-y text-white  shadow-lg rounded-lg overflow-hidden">
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
        <tbody className=" divide-y divide-gray-100 text-sm text-gray-700">
          {plantsData.map((data) => (
            <TableCard key={data._id} data={data} />
          ))}
        </tbody>
      </table>

      {/* Card view for small screens */}
      <div className="md:hidden space-y-4 mt-6">
        {plantsData.map((data) => (
          <MobileCard key={data._id} data={data} />
        ))}
      </div>

      {/* <NextWatering /> */}
    </div>
  );
};

export default AllPlanst;
