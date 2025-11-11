import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <section className="py-24 px-6 bg-brandBlack text-brandGray min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center"
      >
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Get in <span className="text-brandGold">Touch</span>
        </h1>
        <p className="text-lg mb-10">
          Have a project in mind or just want to say hello? Fill out the form below and our team will get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#111111] p-10 rounded-2xl border border-gray-800 shadow-lg hover:border-brandGold transition-all duration-300"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-[#0E0E0E] border border-gray-800 focus:border-brandGold focus:ring-2 focus:ring-brandGold/30 outline-none text-white placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-[#0E0E0E] border border-gray-800 focus:border-brandGold focus:ring-2 focus:ring-brandGold/30 outline-none text-white placeholder-gray-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
            className="p-4 rounded-lg bg-[#0E0E0E] border border-gray-800 focus:border-brandGold focus:ring-2 focus:ring-brandGold/30 outline-none text-white placeholder-gray-500"
          />
          <button
            type="submit"
            className="btn-primary w-full md:w-1/3 mx-auto shadow-md shadow-brandGold/30 hover:shadow-brandGold/50 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
