import React from "react";
import { motion } from "framer-motion";
import client from "../assets/Client.png";

const testimonials = [
  {
    quote:
      "BuildX Layer turned our vision into a real, scalable product in record time.",
    author: "Sarah Patel — CEO, BrightEdge",
  },
  {
    quote:
      "Their design and dev teams worked in perfect sync. The result was stunning.",
    author: "Michael Reed — Co-Founder, NovaTech",
  },
  {
    quote:
      "Working with BuildXLayer felt effortless. They truly understand startups.",
    author: "Priya Nair — Product Head, Alpha Labs",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-12">Trusted by Teams</h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-8 rounded-xl bg-[#111111] border border-gray-800 hover:border-brandGold transition-all duration-300 shadow-lg"
          >
            <p className="text-brandGray italic mb-6">“{t.quote}”</p>
            <h4 className="text-brandGold text-sm font-semibold">{t.author}</h4>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center opacity-60">
        <div className="flex gap-8 grayscale hover:grayscale-0 transition-all duration-300">
          <img src={client} alt="Client 1" className="w-20 h-auto" />
          <img src={client} alt="Client 2" className="w-20 h-auto" />
          <img src={client} alt="Client 3" className="w-20 h-auto" />
        </div>
      </div>
    </section>
  );
}
