import React, { useEffect, useState, useContext } from 'react';
import { FaLeaf, FaPlusCircle, FaSeedling } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const DashboardHome = () => {
  const { user } = useContext(AuthContext); 
  const [plants, setPlants] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const profilePic = user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.jpg';

  const [countUserPlants, setCountUserPlants] = useState(0);
  const [countAllPlants, setCountAllPlants] = useState(0);
  const [countContribution, setCountContribution] = useState(0);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://plant-tree-store-server.vercel.app/myplants?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPlants(data));
    }
  }, [user]);

  useEffect(() => {
    fetch(`https://plant-tree-store-server.vercel.app/plants`)
      .then(res => res.json())
      .then(data => setAllPlants(data));
  }, []);

  // Animate count up function
  const animateCount = (target, setter) => {
    let start = 0;
    if (target === 0) {
      setter(0);
      return;
    }
    const duration = 1000; // 1 second
    const incrementTime = 20;
    const step = Math.ceil(target / (duration / incrementTime));
    const counter = setInterval(() => {
      start += step;
      if (start >= target) {
        setter(target);
        clearInterval(counter);
      } else {
        setter(start);
      }
    }, incrementTime);
  };

  useEffect(() => {
    const totalUserPlants = plants.length;
    const totalAllPlants = allPlants.length;
    const contribution = totalAllPlants === 0 ? 0 : Math.round((totalUserPlants / totalAllPlants) * 100);

    animateCount(totalUserPlants, setCountUserPlants);
    animateCount(totalAllPlants, setCountAllPlants);
    animateCount(contribution, setCountContribution);
  }, [plants, allPlants]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-green-500 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4 text-green-700">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaPlusCircle className="text-3xl text-green-700" />
          <div>
            <p className="text-3xl font-bold text-green-800">{countUserPlants}</p>
            <p className="text-gray-700">Your Added Plants</p>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaLeaf className="text-3xl text-green-700" />
          <div>
            <p className="text-3xl font-bold text-green-800">{countAllPlants}</p>
            <p className="text-gray-700">Total Plants in Store</p>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaSeedling className="text-3xl text-green-700" />
          <div>
            <p className="text-3xl font-bold text-green-800">{countContribution}%</p>
            <p className="text-gray-700">Your Contribution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
