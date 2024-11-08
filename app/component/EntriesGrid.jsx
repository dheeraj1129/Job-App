import React from "react";

function EntriesGrid({ entries }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-md border w-60 h-44  px-4 gap-12 border-gray-200"
        >
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Surname:</strong> {entry.surname}</p>
          <p><strong>Date:</strong> {entry.date}</p>
          <p><strong>Category:</strong> {entry.cat}</p>
          <p><strong>Description:</strong> {entry.dics}</p>
        </div>
      ))}
    </div>
  );
}

export default EntriesGrid;
