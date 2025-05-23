import { Droplets, CheckCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
const UpComingCard = ({ allPlant }) => {
  const today = new Date().toISOString().split("T")[0];
  const [checklist, setChecklist] = useState({});
useEffect(() => {
       AOS.init({
         duration: 1000,
         once: true,
         offset: 120,          
         easing: 'ease-in-out' 
       });
     }, []);
  // Filter plants for today
  const upcomingWateringPlants = allPlant.filter((plant) => {
  if (!plant.nextWatering) return false;
  const date = new Date(plant.nextWatering);
  if (isNaN(date)) return false;
  const plantDate = date.toISOString().split("T")[0];
  return plantDate === today;
});
  // Initialize checklist state for all plants to false
  useEffect(() => {
    const initialChecklist = {};
    upcomingWateringPlants.forEach((plant) => {
      initialChecklist[plant._id] = false;
    });
    setChecklist(initialChecklist);
  }, [allPlant]);

  // Toggle checkbox and show alert if marked true
  const handleToggle = (plantId, plantName) => {
    setChecklist((prev) => {
      const newValue = !prev[plantId];
      if (newValue) {
        Swal.fire({
          icon: 'success',
          title: ' Marked as Watered!',
          text: `${plantName} has been watered for today.`,
          confirmButtonColor: '#3b82f6',
        });
      }
      return { ...prev, [plantId]: newValue };
    });
  };

  return (
    <section data-aos="fade-up" className="py-14 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
        <Droplets className="inline-block mr-2 text-green-600" size={30} />
        Today's Watering Schedule
      </h2>

      {upcomingWateringPlants.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No plants need watering today.</p>
      ) : (
        <ul className="space-y-6 divide-y divide-green-100 bg-green-50 rounded-2xl p-6 shadow-sm">
          {upcomingWateringPlants.map((plant) => (
            <li key={plant._id} className="pt-4 first:pt-0">
              <div data-aos="fade-up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                
                <img
                  src={plant.image || "https://via.placeholder.com/80"}
                  alt={plant.name}
                  className="w-20 h-20 object-cover rounded-xl border border-green-200 shadow"
                />

               
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-900">{plant.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{plant.description}</p>
                </div>

               
                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm text-blue-700 font-medium bg-white px-3 py-1 rounded-full border border-blue-200 shadow">
                    Water at: {plant.nextWatering}
                  </span>

                  <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm font-medium text-green-700">
                    <input
                      type="checkbox"
                      checked={checklist[plant._id] || false}
                      onChange={() => handleToggle(plant._id, plant.name)}
                      className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    {checklist[plant._id] ? 'Watered' : 'Mark as Watered'}
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UpComingCard;
