"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

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
    images: ["/images/lamborghini.jpg"],
    description:
      "The Lamborghini Huracán combines incredible performance with a sleek and aggressive design.",
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
    images: ["/images/rollsroyce.jpg"],
    description:
      "Experience ultimate luxury with the Rolls Royce Phantom. Unmatched comfort, elegance, and status.",
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
    images: ["/images/ferrari.jpg"],
    description:
      "Feel the thrill of the iconic Ferrari 458 with razor-sharp handling and breathtaking acceleration.",
  },
  {
    id: "mustang",
    name: "Ford Mustang 2024 V4 Ecoboost",
    price: "AED450/day",
    availability: true,
    deposit: true,
    transmission: "Automatic",
    seats: 4,
    luggage: 3,
    fuel: "Gasoline",
    images: [
      "/images/mustang/mustang.jpeg",
      "/images/mustang/mustang2.jpeg",
    ],
    description:
      "The 2024 Mustang Ecoboost offers modern muscle with efficiency—perfect for cruising Dubai’s highways.",
  },
  {
    id: "dodge-challenger",
    name: "Dodge Challenger 2023",
    price: "AED450/day",
    availability: true,
    deposit: true,
    transmission: "Automatic",
    seats: 4,
    luggage: 3,
    fuel: "Gasoline",
    images: ["/images/dodge-challenger/1.jpeg" , "/images/dodge-challenger/2.jpeg" , "/images/dodge-challenger/3.jpeg" , 
      "/images/dodge-challenger/4.jpeg" , "/images/dodge-challenger/5.jpeg" , "/images/dodge-challenger/6.jpeg", "/images/dodge-challenger/7.jpeg"
    ],
    description:
      "Drive the Ford Mustang 2024 and feel the roar of a V4 ecoboost with sporty performance.",
  },
];

function CarImageSlider({ images, name }) {
  const [thumbs, setThumbs] = useState(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Thumbs, Navigation]}
        thumbs={{ swiper: thumbs }}
        navigation
        className="rounded-xl overflow-hidden"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[500px]">
              <Image
                src={src}
                alt={`${name} image ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbs}
          watchSlidesProgress
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
          }}
          className="mt-4"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[60px] sm:h-[80px]">
                <Image
                  src={src}
                  alt={`${name} thumb ${i + 1}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 100px, 150px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}




export default function CarDetail({ params }) {
  const car = cars.find((c) => c.id === params.id);

  if (!car) return <div className="text-white p-8">Car not found</div>;

  return (
    <section className="bg-car-detail min-h-screen p-6 md:p-12 text-white">
      <div className="max-w-5xl mx-auto bg-[#FFFFFF10] backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl border border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <CarImageSlider images={car.images} name={car.name} />

          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-green-400">
              {car.name}
            </h1>
            <p className="text-xl font-semibold mb-4">{car.price}</p>
            <p className="text-gray-300 mb-6">{car.description}</p>

            <ul className="space-y-2 text-sm">
              <li>
                <strong>Transmission:</strong> {car.transmission}
              </li>
              <li>
                <strong>Seats:</strong> {car.seats}
              </li>
              <li>
                <strong>Luggage Capacity:</strong> {car.luggage}
              </li>
              <li>
                <strong>Fuel Type:</strong> {car.fuel}
              </li>
              <li>
                <strong>Deposit Required:</strong>{" "}
                {car.deposit ? "Yes" : "No"}
              </li>
            </ul>

            {car.availability && (
              <button className="mt-6 px-8 py-3 border-2 border-green-400 font-bold rounded-xl shadow-lg hover:shadow-[0px_0px_20px_green] transition">
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
