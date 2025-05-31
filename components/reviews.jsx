"use client";

import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    image: '/images/customer1.jpg',
    review: 'I had the best experience renting a Lamborghini from 4hire! The car was immaculate and the service was top-notch.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/images/customer2.jpg',
    review: 'The Rolls Royce Phantom was an absolute dream to drive. Highly recommend 4hire for luxury car rentals in Dubai!',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    image: '/images/customer.jpg',
    review: 'Great service, great cars. I rented a Ferrari 488 GTB and couldn’t be happier with the experience!',
  },
];

function CustomerReviews() {
  return (
    <section className="py-20 px-8 text-center bg-gradient-to-r from-gray-900 to-black">
      <h2 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg">
        What Our Customers <span className="text-green-400">Say</span>
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-800 text-white p-8 rounded-xl hover:shadow-green-400 hover:shadow-[0_0_20px] transition-all duration-700">
            <Image src={review.image} alt={review.name} width={100} height={100} className="rounded-full mx-auto" />
            <h3 className="text-2xl font-semibold mb-5 text-green-400 mt-6">{review.name}</h3>
            <p className="text-lg italic">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
