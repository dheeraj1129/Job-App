'use client';

import React from 'react';
import EntriesGrid from '../EntriesGrid';

function Headpage({ cardCount, entries }) {
  console.log(entries); // Debug: Check if entries is arriving correctly

  return (
    <div className="justify-center bg-gray-700 h-screen w-screen px-4 flex flex-col items-center">
      <h2 className=" h-10 mb-4">Added Card {cardCount}</h2>
      <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted gap for spacing */}
      {entries && entries.length > 0 ? (
          <EntriesGrid entries={entries} />
        ) : (
          <p className=" text-center col-span-4">No entries available</p>
        )}
      </div>
    </div>
  );
}

export default Headpage;
