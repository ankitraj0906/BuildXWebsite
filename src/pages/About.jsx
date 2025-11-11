import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-6 bg-brandBlack text-brandGray min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center"
      >
        <h1 className="text-5xl font-extrabold text-white mb-6">
          About <span className="text-brandGold">BuildX Layer</span>
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At BuildX Layer, we are passionate about transforming visionary ideas into cutting-edge digital products. Our team of expert designers, developers, and strategists work collaboratively to deliver innovative solutions that drive growth and create lasting impact in the tech landscape.
          
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          From concept validation and prototyping to scalable deployment and growth optimization, we collaborate closely with clients to ensure every project is launched with precision, beauty, and measurable success.
        </p>
        <div className="mt-12">
          <img
            src="/assets/team-placeholder.png"
            alt="BuildX Layer Team"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl border border-gray-800 hover:border-brandGold transition-all duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
}