import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import {
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
  FaSeedling,
  FaTag,
} from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TableCard from './TableCard';

const AllPlants = () => {
  const initialData = useLoaderData();
  const [plantsData, setPlantsData] = useState(initialData);
  const { loading } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState(null); // null | 'asc' | 'desc'

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });
  }, []);

  const handleSort = async (order) => {
    setSortOrder(order);

    const url = `https://plant-tree-store-server.vercel.app/plants?sortBy=nextWatering&order=${order}`;
    const res = await fetch(url);
    const sorted = await res.json();
    setPlantsData(sorted);
  };

  if (loading) return <Loading />;

  return (
    <div className="px-4 py-8 overflow-x-hidden max-w-full">
      {/* Title and Description */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-[var(--HEADING-TITLE-TEXT)] mb-3 flex justify-center items-center gap-2">
          <FaSeedling /> Explore Our Diverse Plant Collection
        </h1>
        <p className="text-[var(--TEXT-COLOR)] text-base">
          Discover a wide range of healthy plants perfect for any space. Whether you want
          indoor greens or outdoor trees, find your perfect match here!
        </p>
      </div>

      {/* Static Promotional Banner */}
      <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-8 max-w-4xl mx-auto text-center shadow flex flex-col sm:flex-row items-center justify-center gap-2">
        <FaTag className="text-[var(--HEADING-TITLE-TEXT)]text-2xl" />
        <div>
          <h2 className="text-[var(--HEADING-TITLE-TEXT)] font-semibold text-lg mb-1">
            Special Promotion: Get 10% off on all Easy Care Plants!
          </h2>
          <p className="text-sm text-black">
            Hurry, limited time offer to make your green space flourish with minimal effort.
          </p>
        </div>
      </div>

      {/* Sorting Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => handleSort('asc')}
          className={`btn px-4 py-2 rounded-lg text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 shadow ${
            sortOrder === 'asc' ? 'ring-2 ring-green-500' : ''
          }`}
        >
          <FaSortAmountUpAlt /> Sort by Next Watering (Asc)
        </button>
        <button
          onClick={() => handleSort('desc')}
          className={`btn px-4 py-2 rounded-lg text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 shadow ${
            sortOrder === 'desc' ? 'ring-2 ring-green-500' : ''
          }`}
        >
          <FaSortAmountDownAlt /> Sort by Next Watering (Desc)
        </button>
      </div>

      {/* Card Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        style={{ maxWidth: '100%', overflowX: 'hidden' }}
      >
        {plantsData.map((plant) => (
          <TableCard key={plant._id} data={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlants;