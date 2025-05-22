import React, { useContext, useState } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useNavigation } from 'react-router';
import HomeCard from './HomeCard';
import PlanGuide from './PlanGuide';
import EasyMaintain from '../Components/EasyMaintain';
import UpComingWatering from '../Components/UpComingWatering';
import Hero from '../Components/Hero';
import AllPlanst from './AllPlanst';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';


const Home = () => {
 
  const {loading} = useContext(AuthContext)
    
    const allPlant = useLoaderData();
    console.log(allPlant) 
    
    const [showAll, setShowAll] = useState(false);
      const visiblePlants = showAll ? allPlant : allPlant.slice(0, 6);
       if(loading){
          return <Loading></Loading>
         }
    return (
         <div className='text-black dark:bg-gray-900 dark:text-white min-h-screen p-6'>
          
      <Hero />
      <Banner />
      <h2 className='text-4xl text-green-600 text-center font-bold mt-12'>Plants</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
        {visiblePlants.map((plant) => (
          <HomeCard key={plant._id} plant={plant} />
        ))}
      </div>

      {/* See More / See Less Button */}
      {allPlant.length > 6 && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="btn bg-green-600 text-white"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}

      <div className='mt-8 text-center'>
        <EasyMaintain />
      </div>

      <div>
        <UpComingWatering allPlant={allPlant} />
      </div>
    
    </div>
    );
};

export default Home;