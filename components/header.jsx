import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="relative w-full">
      {/* <div className="absolute inset-0 -z-10">
        <Image src="/path-to-hero-image.jpg" alt="G-Class Hero" layout="fill" objectFit="cover" />
      </div> */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 text-white">
        <div className="text-2xl md:text-3xl font-bold text-green-400 drop-shadow-md">4hire</div>
        {/* <Image src={"/images/logo.png"} width={100} height={100} /> */}
        <nav className="flex flex-wrap gap-4 md:gap-8 mt-2 md:mt-0">
          {['Home', 'Cars' , 'About Us', 'Contact'].map((item) => (
            <Link key={item} href="#" className="text-base md:text-lg font-semibold text-white relative group">
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-700"></span>
            </Link>
          ))}
        </nav>
        <button className="text-base md:text-lg font-semibold border-2 border-green-400 text-white px-4 md:px-6 py-2 rounded-2xl hover:shadow-[0px_0px_20px_green] transition-shadow duration-700 mt-2 md:mt-0">Book Now</button>
      </div>
    </header>
  );
}

export default Header;
