import React from 'react';
import UpComingCard from './UpComingCard';

const UpComingWatering = ({allPlant}) => {
    console.log(allPlant)
  
    return (
        <div>
            <UpComingCard allPlant={allPlant} ></UpComingCard>
        </div>
    );
};

export default UpComingWatering;