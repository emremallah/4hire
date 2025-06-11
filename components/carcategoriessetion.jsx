// components/CarCategoriesSection.jsx
import Link from "next/link";
import {
    Car,
    Shield,
    Briefcase,
    Flame,
    Gem,
    Activity,
    Truck,
} from "lucide-react";

const categories = [
    { key: "economy", label: "Economy", icon: Car },
    { key: "standard", label: "Standard", icon: Shield },
    { key: "business", label: "Business", icon: Briefcase },
    { key: "sport", label: "Sport", icon: Flame },
    { key: "luxury", label: "Luxury", icon: Gem },
    { key: "muscle", label: "Muscle", icon: Activity },
    { key: "suv", label: "SUV", icon: Truck },
];

export default function CarCategoriesSection() {
    return (
        <div className="bg-linear-to-l from-blue-950 to-black">
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
                    Browse by Category
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map(({ key, label, icon: Icon }) => (
                        <Link key={key} href={`/categories/${key}`}>
                            <div className="flex flex-col items-center justify-center text-white p-6 h-56 bg-[#111] border border-[#333] rounded-xl shadow-lg hover:scale-[1.03] hover:bg-[#1a1a1a] transition duration-300 cursor-pointer">
                                <Icon size={48} className="mb-4 text-green-400" />
                                <span className="text-xl sm:text-2xl font-semibold">{label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
