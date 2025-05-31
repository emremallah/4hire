"use client";

import React, { useEffect, useState } from 'react';
import Header from './header';

function Hero() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    const writeText = (text, setter, speed) => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setter(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    };

    writeText('Rent Your Dream Car in Dubai', setTitle, 80);
    setTimeout(() => {
      writeText('Experience the luxury and thrill of driving top-class vehicles. Book now and hit the road in style!', setSubtitle, 50);
    }, 3000);
  }, []);

  return (
    <div style={{ backgroundImage: 'url(/images/heroimg.png)', height: '800px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header />
      <div className="flex flex-col items-center justify-center text-center mt-20 md:mt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-widest">{title}</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">{subtitle}</p>
        <div className="mt-8 flex justify-center items-center gap-2">
          <input type="text" placeholder="Search for cars..." className="w-64 md:w-96 px-4 py-3 rounded-2xl focus:outline-none border-2 border-green-400 bg-[#FFFFFF25] hover:shadow-[0_0_20px_green] shadow-md text-gray-700 placeholder-white duration-700" />
          <button className="px-6 py-3 text-white rounded-2xl transition transform hover:scale-105 border-green-400 border-2 font-bold hover:shadow-[0px_0px_20px_green] duration-700">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
