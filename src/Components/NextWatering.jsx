import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
const NextWatering = () => {
    const [PlantData,setPlantData] = useState([])
    useEffect(() => {
           AOS.init({
             duration: 1000,
             once: true,
             offset: 120,          
             easing: 'ease-in-out' 
           });
         }, []);
    useEffect( ()=>{
        fetch('https://plant-tree-store-server.vercel.app/plants').then(res => res.json()).then(data => setPlantData(data) )
    } )
    const upcomingWateringPlants = PlantData.filter((plant) => new Date(plant.nextWatering) >= new Date())
  .sort((a, b) => new Date(a.nextWatering) - new Date(b.nextWatering));
    return (
        <div>
            <section data-aos="fade-up" className="py-12 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-green-600 mb-8 text-center tracking-tight">
     Upcoming Watering Schedule
  </h2>

  {upcomingWateringPlants.length === 0 ? (
    <p className="text-center text-gray-500 text-lg">No upcoming watering tasks.</p>
  ) : (
    <div  data-aos="fade-up" className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {upcomingWateringPlants.map((plant) => (
        <div
          key={plant._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5"
        >
          <img
            src={plant.image || "https://via.placeholder.com/300"}
            alt={plant.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-800">{plant.name}</h3>
            <span className="bg-blue-100 text-green-600 text-xs px-2 py-1 rounded-full">
              {plant.careLevel}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {plant.description}
          </p>
          <p className="text-xs text-gray-500">
             Next Watering:{" "}
            <span className="text-green-600 font-semibold">{plant.nextWatering}</span>
          </p>
          <div className='mt-2'>
             <Link
            to={`/plants/${plant._id}`}
            className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-xl transition duration-300 shadow-md"
          >
            View 
          </Link>
          </div>
        </div>
      
      ))}
    </div>
  )}
</section>
        </div>
    );
};

export default NextWatering;