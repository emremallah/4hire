import cars from "@/components/cars";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

const suvCars = cars.filter((car) => car.category === "SUV");

export default function SUVPage() {
    return (
        <div className="min-h-screen bg-linear-to-r from-blue-950 to-black text-white">
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-8 border-t-[1px] border-[#FFFFFF50]">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-100">
                    SUV Cars
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suvCars.map((car) => (
                        <Link key={car.id} href={`/cardetail/${car.id}`}>
                            <div className="bg-[#1a1a1a] hover:bg-[#222] transition duration-300 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl border border-[#2a2a2a]">
                                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                                    <Image
                                        src={car.images[0]}
                                        alt={car.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold truncate">{car.name}</h2>
                                <p className="text-gray-400 mt-1">{car.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
