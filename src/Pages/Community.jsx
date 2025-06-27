import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsCard from '../Components/NewsCard';

const Community = () => {
  const [newsletter, setNewsletter] = useState([]);
  useEffect(() =>{

    axios.get('http://localhost:3000/newsletter')
    .then(res=>[
        setNewsletter(res.data)
    ])
    .catch(error=>{
        console.log(error)
    })

  },[])



  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="font-extrabold mb-10 text-center text-[var(--HEADING-TITLE-TEXT)] text-4xl">Newsletter Subscribers</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-left text-gray-700 text-sm">
          <thead className="bg-green-500 text-green-700 font-semibold">
            <tr>
              <th className="px-4 py-3 border text-[var(--TEXT-COLOR)]">#</th>
              <th className="px-4 py-3 border text-[var(--TEXT-COLOR)]">Name</th>
              <th className="px-4 py-3 border text-[var(--TEXT-COLOR)]">Email</th>
            </tr>
          </thead>
          <tbody>
            {newsletter.length > 0 ? (
              newsletter.map((news, idx) => (
                <NewsCard key={news._id} news={news} index={idx} />
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-[var(--TEXT-COLOR)]">
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Community;