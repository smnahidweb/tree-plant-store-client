import React, { useContext, useState } from 'react';
import Banner from '../Components/Banner';
import { Link, useLoaderData } from 'react-router';
import HomeCard from './HomeCard';
import EasyMaintain from '../Components/EasyMaintain';
import UpComingWatering from '../Components/UpComingWatering';
import Hero from '../Components/Hero';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import Newsletter from './Newsletter';
import Community from './Community';
import FAQ from '../Components/FAQ';

const Home = () => {
  const { loading } = useContext(AuthContext);
  const allPlant = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const visiblePlants = allPlant.slice(0, 8);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-black dark:text-white min-h-screen">
      <Hero />
      <Banner />

      {/* Main Container Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Plants Section */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--HEADING-TITLE-TEXT)]">Our New Plants</h2>
          <p className="text-[var(--TEXT-COLOR)] mt-2 max-w-xl mx-auto text-base">
            Discover our latest collection of indoor and outdoor plants, perfect for every home and garden lover. Add greenery to your life with ease.
          </p>
        </div>

        {/* Plant Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visiblePlants.map((plant) => (
            <div key={plant._id} className="w-full">
              <HomeCard plant={plant} />
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-10">
          <Link
            to="/allPlants"
            className="inline-block btn-wide bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 w-full sm:w-auto text-center"
          >
            Explore All Plants
          </Link>
        </div>

        {/* Extra Sections */}
        <div className="mt-20">
          <EasyMaintain />
        </div>

        <div className="mt-20">
          <FAQ />
        </div>

        <div className="mt-20 mb-20">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
