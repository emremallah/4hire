// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Thumbs, Navigation } from "swiper/modules";
// import { useParams } from "next/navigation";
// import "swiper/css";
// import "swiper/css/thumbs";
// import "swiper/css/navigation";
// import cars from '@/components/cars';



// function CarImageSlider({ images, name }) {
//   const [thumbs, setThumbs] = useState(null);

//   return (
//     <div className="w-full">
//       <Swiper
//         modules={[Thumbs, Navigation]}
//         thumbs={{ swiper: thumbs }}
//         navigation
//         className="rounded-xl overflow-hidden"
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[500px]">
//               <Image
//                 src={src}
//                 alt={`${name} image ${i + 1}`}
//                 fill
//                 priority={i === 0}
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover rounded-xl"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {images.length > 1 && (
//         <Swiper
//           onSwiper={setThumbs}
//           watchSlidesProgress
//           spaceBetween={10}
//           breakpoints={{
//             0: { slidesPerView: 3 },
//             640: { slidesPerView: 5 },
//           }}
//           className="mt-4"
//         >
//           {images.map((src, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative w-full h-[60px] sm:h-[80px]">
//                 <Image
//                   src={src}
//                   alt={`${name} thumb ${i + 1}`}
//                   fill
//                   className="object-cover rounded-md"
//                   sizes="(max-width: 640px) 100px, 150px"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </div>
//   );
// }




// export default function CarDetail({ params }) {
//   const car = cars.find((c) => c.id === params.id);

//   if (!car) return <div className="text-white p-8">Car not found</div>;

//   return (
//     <section className="bg-car-detail min-h-screen p-6 md:p-12 text-white">
//       <div className="max-w-5xl mx-auto bg-[#FFFFFF10] backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl border border-white/10">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <CarImageSlider images={car.images} name={car.name} />

//           <div>
//             <h1 className="text-4xl font-extrabold mb-4 text-green-400">
//               {car.name}
//             </h1>
//             <p className="text-xl font-semibold mb-4">{car.price}</p>
//             <p className="text-gray-300 mb-6">{car.description}</p>

//             <ul className="space-y-2 text-sm">
//               <li>
//                 <strong>Transmission:</strong> {car.transmission}
//               </li>
//               <li>
//                 <strong>Seats:</strong> {car.seats}
//               </li>
//               <li>
//                 <strong>Luggage Capacity:</strong> {car.luggage}
//               </li>
//               <li>
//                 <strong>Fuel Type:</strong> {car.fuel}
//               </li>
//               <li>
//                 <strong>Deposit Required:</strong>{" "}
//                 {car.deposit ? "Yes" : "No"}
//               </li>
//             </ul>

//             {car.availability && (
//               <button className="mt-6 px-8 py-3 border-2 border-green-400 font-bold rounded-xl shadow-lg hover:shadow-[0px_0px_20px_green] transition">
//                 Book Now
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import cars from "@/components/cars";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarImageSlider({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full">
      <Carousel
        selectedItem={currentIndex}
        onChange={setCurrentIndex}
        showThumbs={true}
        showStatus={false}
        infiniteLoop
        showIndicators
        useKeyboardArrows
        autoPlay={false}
        thumbWidth={80}
        dynamicHeight={false}
        className="rounded-xl overflow-hidden"
      >
        {images.map((src, i) => (
          <div key={i} className="relative h-[200px] sm:h-[280px] md:h-[400px] lg:h-[500px]">
            <Image
              src={src}
              alt={`${name} image ${i + 1}`}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default function CarDetail() {
  const params = useParams();
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
                <strong>Deposit Required:</strong> {car.deposit ? "Yes" : "No"}
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



