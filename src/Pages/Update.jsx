import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const data = useLoaderData();
    console.log(data)
    const {image,
        _id,
    name,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName,} = data;

    const HandleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
       const image = form.image.value;
  const name = form.name.value;
  const category = form.category.value;
  const description = form.description.value;
  const careLevel = form.careLevel.value;
  const wateringFrequency = form.wateringFrequency.value;
  const lastWatered = form.lastWatered.value;
  const nextWatering = form.nextWatering.value;
  const healthStatus = form.healthStatus.value;
  const userEmail = form.userEmail.value;
  const userName = form.userName.value;

  const UpdatedPlant = {
    image,
    name,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName,
  };


  fetch(`http://localhost:3000/plants/${_id}`,{
     method:"PUT",
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(UpdatedPlant)

  })
  .then(res => res.json())
  .then(data => {
    console.log("After updated data",data)
    if(data.modifiedCount){
             Swal.fire({
              title: "Plant Updated Successfully ",
              icon: "success",
              draggable: true
            });
        }
  })


    }
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-4">
  <form onSubmit={HandleUpdate} className="max-w-4xl mx-auto bg-white border border-green-200 p-10 rounded-3xl shadow-2xl space-y-6">
    <h2 className="text-3xl font-bold text-green-700 text-center"> Update Your Plant</h2>

    
    <div>
      <label className="block text-sm font-medium text-green-700">Image URL</label>
      <input type="text" defaultValue={image} name="image" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    
    <div>
      <label className="block text-sm font-medium text-green-700">Plant Name</label>
      <input type="text" defaultValue={name} name="name" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    
    <div>
      <label className="block text-sm font-medium text-green-700">Category</label>
      <select name="category" defaultValue={category} className="w-full mt-1 p-3 border border-green-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="succulent">Succulent</option>
        <option value="fern">Fern</option>
        <option value="flowering">Flowering</option>
      </select>
    </div>

  
    <div>
      <label className="block text-sm font-medium text-green-700">Description</label>
      <textarea name="description" defaultValue={description} rows="4" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    
    <div>
      <label className="block text-sm font-medium text-green-700">Care Level</label>
      <select name="careLevel" defaultValue={careLevel} className="w-full mt-1 p-3 border border-green-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="easy">Easy</option>
        <option value="moderate">Moderate</option>
        <option value="difficult">Difficult</option>
      </select>
    </div>

   
    <div>
      <label className="block text-sm font-medium text-green-700">Watering Frequency</label>
      <input type="text" defaultValue={wateringFrequency} name="wateringFrequency" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    <div>
      <label className="block text-sm font-medium text-green-700">Last Watered Date</label>
      <input type="date" defaultValue={lastWatered} name="lastWatered" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    
    <div>
      <label className="block text-sm font-medium text-green-700">Next Watering Date</label>
      <input type="date" defaultValue={nextWatering} name="nextWatering" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-green-700">Health Status</label>
      <input type="text" defaultValue={healthStatus} name="healthStatus" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    
    <div>
      <label className="block text-sm font-medium text-green-700">User Email</label>
      <input type="email" defaultValue={userEmail} name="userEmail" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-green-700">User Name</label>
      <input type="text" defaultValue={userName} name="userName" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

   
    <div className="text-center">
      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full">
         Update your Plant
      </button>
    </div>
  </form>
</div>
        </div>
    );
};

export default Update;