"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful!');
    setFormData({ email: '', password: '' });
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-xl text-white hover:shadow-[0_0_20px] hover:shadow-blue-400 transition-all duration-700">
        <h2 className="text-4xl font-extrabold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-lg font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-lg font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-[0px_0px_20px] hover:shadow-blue-400 transition-transform transform hover:scale-105 duration-700"
          >
            Log In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link href="/auth/signup" className="text-blue-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
