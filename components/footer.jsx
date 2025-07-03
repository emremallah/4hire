"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-10 px-8 border-t-[1px] border-[#FFFFFF20]">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">4hire</h3>
            <p className="text-gray-400">Luxury car rental service in Dubai. Rent your dream car with us!</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/cars" className="hover:text-green-400">Cars</a></li>
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p>Phone: +971 503 155 971</p>
            <p>Email: info@4hire.com</p>
            <p>Location: Dubai, UAE</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="hover:text-green-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-green-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-green-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-green-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-500 text-sm">
          © 2025 4hire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
