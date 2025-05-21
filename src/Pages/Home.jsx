import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import HomeCard from './HomeCard';
import PlanGuide from './PlanGuide';
import EasyMaintain from '../Components/EasyMaintain';
import UpComingWatering from '../Components/UpComingWatering';
import Hero from '../Components/Hero';

const Home = () => {
    const allPlant = useLoaderData();
    console.log(allPlant)
    return (
        <div className=' text-black dark:bg-gray-900 dark:text-white min-h-screen p-6'>
            <Hero></Hero>
            <Banner></Banner>
            <h2 className='text-4xl text-green-600 text-center font-bold mt-12'> Plants </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
                {
                    allPlant.map(plant => <HomeCard plant={plant} ></HomeCard>)
                }
            </div>
           <div className='mt-8 text-center'>
             <EasyMaintain></EasyMaintain>
           </div>
           <div>
            <UpComingWatering allPlant = {allPlant}></UpComingWatering>
           </div>
        </div>
    );
};

export default Home;