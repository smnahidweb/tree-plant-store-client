import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const EasyMaintain = () => {
  const [plants, setPlants] = useState([]);
  const [easyCarePlants, setEasyCarePlants] = useState([]);
  useEffect(() => {
       AOS.init({
         duration: 1000,
         once: true,
         offset: 120,          
         easing: 'ease-in-out' 
       });
     }, []);
    useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        const filtered = data.filter(
          (plant) => plant.careLevel?.toLowerCase() === "easy"
        );
        setEasyCarePlants(filtered);
      });
  }, []);
    return (
      <section data-aos="fade-up" className="py-12 px-6 max-w-7xl mx-auto rounded-xl shadow-sm">
  <h2 className="text-4xl font-bold text-green-600 mb-8 text-center tracking-tight">
    Easy-Care Favorites
  </h2>

  {easyCarePlants.length === 0 ? (
    <p className="text-center text-gray-500 text-lg">No easy-care plants found.</p>
  ) : (
    <div data-aos="fade-up" className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
      {easyCarePlants.map((plant) => (
        <div
          key={plant._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between"
        >
          <img
            src={plant.image || "https://via.placeholder.com/300"}
            alt={plant.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-green-900">{plant.name}</h3>
            
            <span
              className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full cursor-help"
              data-tooltip-id={`easycare-tooltip-${plant._id}`}
              data-tooltip-content="These plants need little care — great for beginners!"
            >
              Easy Care
            </span>
            <Tooltip id={`easycare-tooltip-${plant._id}`} place="top" />
          </div>

          <p className="text-sm text-gray-700 mb-3 line-clamp-2">
            {plant.description || "No description available."}
          </p>

          <div
            className="text-xs text-gray-500 cursor-help"
            data-tooltip-id={`watering-tooltip-${plant._id}`}
            data-tooltip-content="Scheduled date to water the plant next"
          >
            💧 <span className="text-blue-600 font-medium">Next Watering:</span> {plant.nextWatering}
            <Tooltip id={`watering-tooltip-${plant._id}`} place="bottom" />
          </div>

          <NavLink to={`/plants/${plant._id}`}>
            <button className="btn w-full mt-2 bg-green-500 text-white">View</button>
          </NavLink>
        </div>
      ))}
    </div>
  )}
</section>


    );
};

export default EasyMaintain;