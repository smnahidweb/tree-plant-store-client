import React from 'react';

const NewsCard = ({ news, index }) => {
  return (
    <tr className="border-b ">
      <td className="px-4 py-2 text-[var(--TEXT-COLOR)]">{index + 1}</td>
      <td className="px-4 py-2 text-[var(--TEXT-COLOR)]">{news.name}</td>
      <td className="px-4 py-2 text-[var(--TEXT-COLOR)]">{news.email}</td>
    </tr>
  );
};

export default NewsCard;
