import React, { useContext, useState } from 'react';
import Banner from '../Components/Banner';
import { Link, useLoaderData } from 'react-router';
import HomeCard from './HomeCard';
import EasyMaintain from '../Components/EasyMaintain';
import UpComingWatering from '../Components/UpComingWatering';
import Hero from '../Components/Hero';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const Home = () => {
  const { loading } = useContext(AuthContext);
  const allPlant = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const visiblePlants =  allPlant.slice(0, 8);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='text-black dark:text-white min-h-screen px-4 md:px-10'>
      <Hero />
      <Banner />

      <div className="text-center mt-12">
  <h2 className="text-4xl text-green-600 font-bold">Our New Plants</h2>
  <p className="text-[var(--TEXT-COLOR)] mt-2 max-w-xl mx-auto text-base">
    Discover our latest collection of indoor and outdoor plants, perfect for every home and garden lover. Add greenery to your life with ease.
  </p>
</div>


      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {visiblePlants.map((plant) => (
          <div key={plant._id} className="w-full">
            <HomeCard plant={plant} />
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
 <div className='text-center'> 
       <Link
  to="/allPlants"
  className="inline-block btn-wide bg-green-600 mt-10 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 w-full sm:w-auto text-center"
>
  Explore All Plants
</Link>
 </div>


      {/* Extra Sections */}
      <div className='mt-14'>
        <EasyMaintain />
      </div>

      <div className='mt-14'>
        <UpComingWatering allPlant={allPlant} />
      </div>
    </div>
  );
};

export default Home;
