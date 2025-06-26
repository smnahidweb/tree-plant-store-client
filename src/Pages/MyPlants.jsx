import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { FaEdit, FaTrash } from 'react-icons/fa'

import Loading from '../Components/Loading';

const MyPlants = () => {
  const { user,loading } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://plant-tree-store-server.vercel.app/myplants?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPlants(data));
    }
  }, [user]);
if(loading){
  return <Loading></Loading>
}
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
        fetch(`https://plant-tree-store-server.vercel.app/plants/${id}`, {
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
    navigate(`/dashboard/updateTree/${id}`);
  };

  return (
 <div className="min-h-screen p-6 bg-gradient-to-b from-green-50 to-white">
  <h2 className="text-4xl font-bold mb-8 text-green-700 text-center">
    My Plants Collection
  </h2>

  {plants.length === 0 ? (
    <p className="text-center text-gray-600 text-lg">There is no plant added by you.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-green-200 rounded-xl overflow-hidden shadow-md">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr
              key={plant._id}
              className="hover:bg-green-50 transition-colors duration-200 border-b"
            >
              <td className="py-4 px-6">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-16 w-20 object-cover rounded-md border border-green-100"
                />
              </td>
              <td className="py-4 px-6 text-green-800 font-semibold">{plant.name}</td>
              <td className="py-4 px-6">
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  {plant.category}
                </span>
              </td>
              <td className="py-4 px-6 space-x-3">
                <button
                  onClick={() => handleUpdate(plant._id)}
                  className=" mb-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition inline-flex items-center gap-2"
                >
                  <FaEdit /> Update
                </button>
                <button
                  onClick={() => handleDelete(plant._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition inline-flex items-center gap-2"
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default MyPlants;
