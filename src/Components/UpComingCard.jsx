import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaTint, FaCheckCircle, FaWater, FaCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpComingCard = () => {
  const today = new Date().toLocaleDateString('en-CA');
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });
  }, []);

  // Fetch plants from backend on mount
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch('https://plant-tree-store-server.vercel.app/plants');
        const data = await res.json();
        setPlants(data);
      } catch (error) {
        console.error('Failed to fetch plants:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  const handleToggle = async (plantId, plantName) => {
    const plant = plants.find(p => p._id === plantId);
    if (!plant) return;

    const newStatus = plant.wateringStatus === 'pending' ? 'successful' : 'pending';

    try {
      const res = await fetch(`https://plant-tree-store-server.vercel.app/plants/${plantId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error('Failed to update status');

      const updatedPlant = await res.json();

      setPlants((prev) =>
        prev.map(p => (p._id === plantId ? updatedPlant : p))
      );

      if (newStatus === 'successful') {
        Swal.fire({
          icon: 'success',
          title: 'Marked as Watered!',
          text: `${plantName} has been watered for today.`,
          confirmButtonColor: '#3b82f6',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Could not update watering status.', 'error');
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading plants...</p>;
  }

  // Filter plants by today and status
  const todayPlants = plants.filter(plant => {
    if (!plant.nextWatering) return false;
    const plantDate = new Date(plant.nextWatering).toLocaleDateString('en-CA');
    return plantDate === today;
  });

  const pendingPlants = todayPlants.filter(p => p.wateringStatus === 'pending');
  const completedPlants = todayPlants.filter(p => p.wateringStatus === 'successful');

  const renderPlantItem = (plant) => (
    <li key={plant._id} className="pt-4 first:pt-0 transition-all duration-500 ease-in-out" data-aos="fade-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <img
          src={plant.image || 'https://via.placeholder.com/80'}
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
              checked={plant.wateringStatus === 'successful'}
              onChange={() => handleToggle(plant._id, plant.name)}
              className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            {plant.wateringStatus === 'successful' ? (
              <>
                <FaCheck className="text-green-600" /> Watered
              </>
            ) : (
              <>
                <FaWater className="text-blue-500" /> Mark as Watered
              </>
            )}
          </label>
        </div>
      </div>
    </li>
  );

  return (
    <section className="py-14 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
        <FaTint className="inline-block mr-2 font-bold text-green-500" size={30} />
        Today's Watering Schedule
      </h2>

      {pendingPlants.length === 0 ? (
        <p className="text-center text-[var(--TEXT-COLOR)] text-lg">No plants need watering today.</p>
      ) : (
        <ul className="space-y-6 divide-y divide-green-100 bg-green-50 rounded-2xl p-6 shadow-sm mb-10">
          {pendingPlants.map(renderPlantItem)}
        </ul>
      )}

      <h2 className="text-3xl text-center font-bold text-green-500 mt-12 mb-6">
        <FaCheckCircle className="inline-block mr-2 text-green-600" size={28} />
        Completed Today’s Watering
      </h2>

      {completedPlants.length === 0 ? (
        <p className="text-center text-[var(--TEXT-COLOR)] text-md">No plants have been watered yet today.</p>
      ) : (
        <ul className="space-y-6 divide-y divide-green-100 bg-white rounded-2xl p-6 shadow-sm">
          {completedPlants.map(renderPlantItem)}
        </ul>
      )}
    </section>
  );
};

export default UpComingCard;
