"use client";

import React from 'react';
import Image from 'next/image';

const luxuryCars = [
  { id: 1, name: 'Lamborghini Huracán', price: '$899/day', img: '/images/lamborghini.jpg' },
  { id: 2, name: 'Rolls Royce Phantom', price: '$1299/day', img: '/images/rollsroyce.jpg' },
  { id: 3, name: 'Ferrari 488 GTB', price: '$1099/day', img: '/images/ferrari.jpg' },
  { id: 4, name: 'Bentley Continental', price: '$999/day', img: '/images/bentley.jpg' },
];

function LuxuryCarSelection() {
  return (
    <section className="py-16 px-8 text-center bg-linear-to-l from-blue-950 to-black border-t-[1px] border-[#FFFFFF50]">
      <h2 className="text-4xl font-bold mb-8 text-gray-300">Luxury <span className='text-green-400'>Car</span> Selection</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {luxuryCars.map((car) => (
          <div key={car.id} className="rounded-lg shadow-lg p-4 transition transform hover:scale-105 border-2 border-sky-400 text-white hover:shadow-[0px_0px_20px] hover:shadow-sky-400 duration-700">
            <Image src={car.img} alt={car.name} width={300} height={200} className="rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
            <p className="text-green-600 font-bold text-lg">{car.price}</p>
            <button className="mt-4 px-6 py-2 border-2 border-sky-400 text-white rounded-lg hover:shadow-[0_0_20px] hover:shadow-sky-400 duration-700 transition">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LuxuryCarSelection;
