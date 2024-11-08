'use client';

import React from 'react';
import Entrypage from './Entrypage';

function Headpage({ cardCount, entries }) {
  console.log(entries); // Debug: Check if entries is arriving correctly

  return (
    <div className="text-white text-2xl font-bold h-screen w-full flex flex-col items-center">
      <h2 className="text-white mb-4">Added Card {cardCount}</h2>
      <div className="grid grid-cols-4 gap-4 w-full p-4">
        {entries && entries.length > 0 ? (
          entries.map((entry, index) => (
            <Entrypage key={index} entry={entry} />
          ))
        ) : (
          <p className="text-white text-center col-span-4">No entries available</p>
        )}
      </div>
    </div>
  );
}

export default Headpage;
