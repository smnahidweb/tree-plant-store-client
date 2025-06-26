import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AddPlant = () => {
  const {user } = useContext(AuthContext)
    const HandleAdd = (e) =>{
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

  const newPlant = {
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
    TodaysWateringStatus:'pending'
  };

  console.log(newPlant);


  fetch('https://plant-tree-store-server.vercel.app/plants',{
    method:"POST",
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(newPlant)
  })
  .then(res=> res.json())
  .then(data => {
    console.log("After Added Data", data)
    if(data.insertedId){
        Swal.fire({
  title: "Plant Added Successfully!",
  icon: "success",
  draggable: true
});
    }
  })

    }
    return (
      <div className="min-h-screen  py-12 px-4">
  <form onSubmit={HandleAdd} className="max-w-4xl mx-auto  border border-green-200 p-10 rounded-3xl shadow-2xl space-y-6">
    <h2 className="text-3xl font-bold text-green-700 text-center"> Add a New Plant</h2>

    <div>
      <label className="block text-sm font-medium text-green-700">Image URL</label>
      <input placeholder='Image URL' type="text" name="image" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

  
    <div>
      <label className="block text-sm font-medium text-green-700">Plant Name</label>
      <input placeholder='Plant Name' type="text" name="name" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    <div>
      <label className="block text-sm font-medium text-green-700">Category</label>
      <select placeholder='Category' name="category" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="succulent">Succulent</option>
        <option value="fern">Fern</option>
        <option value="flowering">Flowering</option>
      </select>
    </div>

  
    <div>
      <label className="block text-sm font-medium text-green-700">Description</label>
      <textarea placeholder='Description' name="description" rows="4" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

  
    <div>
      <label className="block text-sm font-medium text-green-700">Care Level</label>
      <select  name="careLevel" className="w-full mt-1 p-3 border border-green-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="easy">Easy</option>
        <option value="moderate">Moderate</option>
        <option value="difficult">Difficult</option>
      </select>
    </div>

   
    <div>
      <label className="block text-sm font-medium text-green-700">Watering Frequency</label>
      <input placeholder='Watering Frequency' type="text" name="wateringFrequency" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    
    <div>
      <label className="block text-sm font-medium text-green-700">Last Watered Date</label>
      <input placeholder='Last Watered Date' type="date" name="lastWatered" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

 
    <div>
      <label className="block text-sm font-medium text-green-700">Next Watering Date</label>
      <input type="date" placeholder='Next Watered Date' name="nextWatering" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

    <div>
      <label className="block text-sm font-medium text-green-700">Health Status</label>
      <input placeholder='Health Status' type="text" name="healthStatus" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-green-700">User Email</label>
      <input placeholder='User Email' defaultValue={user.email} type="email" name="userEmail" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>

 
      <div>
         <label className="block text-sm font-medium text-green-700">User Name</label>
         <input type="text" defaultValue={user.displayName} name="userName" className="w-full mt-1 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
       </div>
  
    <div className="text-center">
      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full">
         Add Plant
      </button>
    </div>
  </form>
</div>
    );
};

export default AddPlant;