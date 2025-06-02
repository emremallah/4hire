"use client";

import React from "react";
import Image from "next/image";

// Mock data - you can later fetch based on ID from DB
const cars = [
  {
    id: "1",
    name: "Lamborghini Huracán",
    price: "$899/day",
    availability: true,
    deposit: true,
    transmission: "Automatic",
    seats: 2,
    luggage: 1,
    fuel: "Gasoline",
    img: "/images/lamborghini.jpg",
    description:
      "The Lamborghini Huracán combines incredible performance with a sleek and aggressive design. Ideal for high-end experiences and unforgettable drives.",
  },
  {
    id: "2",
    name: "Rolls Royce Phantom",
    price: "$1299/day",
    availability: false,
    deposit: true,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Gasoline",
    img: "/images/rollsroyce.jpg",
    description:
      "Experience ultimate luxury with the Rolls Royce Phantom. Unmatched comfort, elegance, and status all in one vehicle.",
    },
    {
    id: "ferrari",
    name: "Ferrari 458",
    price: "$800/day",
    availability: true,
    deposit: true,
    transmission: "Automatic",
    seats: 5,
    luggage: 3,
    fuel: "Gasoline",
    img: "/images/ferrari.jpg",
    description:
      "Experience ultimate luxury with the Rolls Royce Phantom. Unmatched comfort, elegance, and status all in one vehicle.",
  }
  
];

export default function CarDetail({ params }) {
  const car = cars.find((c) => c.id === params.id);
if (!car) {
    return <div className="text-white p-8">Car not found</div>;
  }

  return (
    <section className="bg-car-detail min-h-screen p-6 md:p-12 text-white">
      <div className="max-w-5xl mx-auto bg-[#FFFFFF10] backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl border border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src={car.img}
            alt={car.name}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-green-400">{car.name}</h1>
            <p className="text-xl font-semibold text-white mb-4">{car.price}</p>
            <p className="text-gray-300 mb-6">{car.description}</p>

            <ul className="space-y-2 text-sm">
              <li><strong>Transmission:</strong> {car.transmission}</li>
              <li><strong>Seats:</strong> {car.seats}</li>
              <li><strong>Luggage Capacity:</strong> {car.luggage}</li>
              <li><strong>Fuel Type:</strong> {car.fuel}</li>
              <li>
                <strong>Availability:</strong>{" "}
                <span className={car.availability ? "text-green-400" : "text-red-400"}>
                  {car.availability ? "Available" : "Not Available"}
                </span>
              </li>
              <li>
                <strong>Deposit Required:</strong>{" "}
                {car.deposit ? "Yes" : "No"}
              </li>
            </ul>

            {car.availability && (
              <button className="mt-6 px-8 py-3 border-2 border-green-400 text-white font-bold rounded-xl shadow-lg hover:shadow-[0px_0px_20px_green] transform transition duration-700">
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
