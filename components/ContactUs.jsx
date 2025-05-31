"use client";

import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission (send data to backend, etc.)
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 px-8 text-center bg-gradient-to-r from-gray-900 to-black">
      <h2 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg">
        Get in <span className="text-green-400">Touch</span>
      </h2>
      <p className="text-lg text-gray-300 mb-10">
        Have any questions or need more information? Feel free to reach out to us!
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#FFFFFF25] p-8 rounded-xl shadow-xl border-2 border-sky-400 hover:shadow-[0_0_20px] hover:shadow-sky-400 duration-700">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg text-white mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg text-white mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg text-white mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            placeholder="Write your message"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="w-full px-6 py-3 border-2 border-sky-400 hover:shadow-[0_0_20px] hover:shadow-sky-400 text-white rounded-2xl transition duration-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
