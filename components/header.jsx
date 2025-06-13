'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Cars', href: '/cars' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="relative w-full text-white">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        <div className="text-2xl md:text-3xl font-bold text-green-400 drop-shadow-md">4Hire Cars</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap gap-8 items-center">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-lg font-semibold relative group">
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-700"></span>
            </Link>
          ))}
        </nav>

        <button className="hidden md:block text-lg font-semibold border-2 border-green-400 text-white px-6 py-2 rounded-2xl hover:shadow-[0px_0px_20px_green] transition-shadow duration-700">
          Book Now
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 transition-all duration-300">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-base font-semibold border-b border-gray-700 pb-2 hover:text-green-400 duration-700"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full mt-2 text-base font-semibold border-2 border-green-400 px-6 py-2 rounded-2xl hover:shadow-[0px_0px_20px_green] transition-shadow duration-700">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
