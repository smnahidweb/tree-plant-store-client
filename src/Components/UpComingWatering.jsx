import React from 'react';
import UpComingCard from './UpComingCard';
import { useLoaderData } from 'react-router';

const UpComingWatering = () => {
    const allPlant = useLoaderData()
    console.log(allPlant)
  
    return (
        <div>
            <UpComingCard allPlant={allPlant} ></UpComingCard>
        </div>
    );
};

export default UpComingWatering;