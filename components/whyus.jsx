"use client";

import React from 'react';

function WhyChooseUs() {
  return (
    <section className="py-20 px-8 text-center bg-gradient-to-r from-gray-900 to-black">
      <h2 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg">
        Why Choose <span className="text-green-400">4hire?</span>
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-800 text-white p-8 rounded-xl hover:shadow-green-400 hover:shadow-[0_0_20px] transition-all duration-700">
          <h3 className="text-2xl font-semibold mb-5 text-green-400">Premium Vehicles</h3>
          <p className="text-lg">
            We offer an exquisite selection of luxury cars, including Lamborghini, Ferrari, and Rolls Royce, ensuring you a first-class experience on the road.
          </p>
        </div>
        <div className="bg-gray-800 text-white p-8 rounded-xl hover:shadow-green-400 hover:shadow-[0_0_20px] transition-all duration-700">
          <h3 className="text-2xl font-semibold mb-5 text-green-400">Affordable Prices</h3>
          <p className="text-lg">
            Enjoy the luxury without breaking the bank. Our transparent and competitive pricing gives you value for your money.
          </p>
        </div>
        <div className="bg-gray-800 text-white p-8 rounded-xl hover:shadow-green-400 hover:shadow-[0_0_20px] transition-all duration-700">
          <h3 className="text-2xl font-semibold mb-5 text-green-400">24/7 Customer Support</h3>
          <p className="text-lg">
            Our dedicated support team is available around the clock to assist with any booking needs or inquiries, ensuring you have a seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
