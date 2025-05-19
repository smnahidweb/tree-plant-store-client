import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import HomeCard from './HomeCard';
import PlanGuide from './PlanGuide';

const Home = () => {
    const allPlant = useLoaderData();
    console.log(allPlant)
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl text-green-600 text-center font-bold mt-12'> Plants </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
                {
                    allPlant.map(plant => <HomeCard plant={plant} ></HomeCard>)
                }
            </div>
            <PlanGuide></PlanGuide>
        </div>
    );
};

export default Home;