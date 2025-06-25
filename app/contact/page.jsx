"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  BotMessageSquare,
  Instagram,
  MapPin,
  Smartphone,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#ffffff0a] text-white py-12 px-4 md:px-8 backdrop-blur-md border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-400 shadow-xl">
            <Image
              src="/images/logo.png" // مسیر لوگو رو بررسی کن
              alt="4Hire Cars Logo"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 mt-4">
            Contact Us
          </h1>
          <p className="text-gray-300 mt-2">We're here to help you 24/7</p>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <ContactItem
            icon={<Phone className="text-green-400" />}
            text="Call Us"
            href="tel:+971503155971"
          />
          <ContactItem
            icon={<MessageSquare className="text-green-400" />}
            text="Send SMS"
            href="sms:+971503155971"
          />
          <ContactItem
            icon={<Mail className="text-green-400" />}
            text="Email"
            href="mailto:you@example.com"
          />
          <ContactItem
            icon={<MessageCircle className="text-green-400" />}
            text="WhatsApp"
            href="https://wa.me/971503155971"
          />
          <ContactItem
            icon={<MessageCircle className="text-green-400" />}
            text="Telegram"
            href="https://t.me/yourusername"
          />
          <ContactItem
            icon={<Instagram className="text-green-400" />}
            text="Instagram"
            href="https://instagram.com/yourprofile"
          />
          <ContactItem
            icon={<BotMessageSquare className="text-green-400" />}
            text="Botim"
            href="https://botim.me/+971503155971"
          />
          <ContactItem
            icon={<MapPin className="text-green-400" />}
            text="Dubai"
            href="#"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all"
    >
      <div className="text-xl">{icon}</div>
      <div className="text-base font-medium">{text}</div>
    </Link>
  );
}
