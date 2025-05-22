import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { div } from 'framer-motion/client';

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myplants?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPlants(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this plant?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setPlants(plants.filter(plant => plant._id !== id));
              Swal.fire('Deleted!', 'Your plant has been deleted.', 'success');
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updateTree/${id}`);
  };

  return (
   <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
  <h2 className="text-4xl font-bold mb-8 text-green-700 text-center"> My Plants Collection</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {plants.map((plant) => (
      <div
        key={plant._id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-green-100"
      >
        <img
          src={plant.image}
          alt={plant.name}
          className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold text-green-800">{plant.name}</h3>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mt-2">
            {plant.category}
          </span>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => handleUpdate(plant._id)}
              className="text-sm font-medium text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(plant._id)}
              className="text-sm font-medium text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>

          </div>
        </div>

     {plant.length === 0 ? (
  <div>There is no Plant for you</div>
) : (
  <div><p></p></div>
)}

      </div>
 
    ))}
  </div>
</div>

  );
};

export default MyPlants;
