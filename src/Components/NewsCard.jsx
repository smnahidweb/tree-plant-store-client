import React from 'react';

const NewsCard = ({ news, index }) => {
  // Fallbacks in case field names vary
  const id = news._id || news._Id || index;
  const name = news.name || 'N/A';
  const email = news.email || 'N/A';

  return (
    <tr key={id} className="border-b">
      <td className="px-4 py-2 text-[var(--TEXT-COLOR)]">{index + 1}</td>
      <td className="px-4 py-2 text-[var(--TEXT-COLOR)]">{name}</td>
      <td className="px-4 py-2 text-[var(--TEXT-COLOR)]">{email}</td>
    </tr>
  );
};

export default NewsCard;
