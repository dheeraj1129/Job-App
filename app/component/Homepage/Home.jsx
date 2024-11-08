"use client";

import React, { useState } from "react";
import Headpage from "../Headpage/page";
import EntriesGrid from "../EntriesGrid";

function Homepage() {
  const [entries, setEntries] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    date: "",
    cat: "",
    dics: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitClick = (event) => {
    event.preventDefault();

    if (Object.values(formData).some((field) => !field)) {
      setError("All fields are required.");
      return;
    }

    setEntries((prevEntries) => [...prevEntries, formData]);
    setCardCount((prevCount) => prevCount + 1);

    setFormData({ name: "", surname: "", date: "", cat: "", dics: "" });
    setError("");
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gradient-to-b
     w-screen from-gray-900 to-purple-900">
      {/* Pass cardCount and entries to Headpage */}
      <Headpage cardCount={cardCount} entries={entries} />

      <form className="w-full max-w-md p-8 rounded-md shadow-md" onSubmit={submitClick}>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Entry</h2>

        {["name", "surname", "date", "cat", "dics"].map((name, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
        ))}

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
        >
          Create
        </button>
      </form>
      <EntriesGrid entries={entries} />

    </div>
  );
}

export default Homepage;
