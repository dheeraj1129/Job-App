// pages/Home.js
"use client";
import { useState } from 'react';
import Navbar from './component/navbar/page';
import Homepage from './component/Homepage/page';

export default function Home() {
  const [data, setData] = useState([]);  // Assuming data is an array
  const [cardCount, setCardCount] = useState(0);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <Cardpage cardCount={cardCount} />
      <div>
        <Homepage cardCount={cardCount} setCardCount={setCardCount} />
      </div>
    </div>
  );
}
