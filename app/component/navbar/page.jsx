// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center cursor-pointer h-16 w-screen bg-gray-800 p-4 shadow-lg">
      <h2 className="text-white text-2xl font-bold">Hello Avengers</h2>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
        Log in
      </button>
    </nav>
  );
}
    