import React from 'react';
import {motion} from 'framer-motion';

export default function Hero(){
  return(
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-brandBlack via-[#111] to-brandBlack text-center overflow-hidden">
      <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        className="relative z-10 px-6"
      >
        <p className="text-brandGold uppercase tracking-widest text-sm mb-3">Dream. Build. Launch</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Crafting Stunning Websites & Apps for Visionary Entrepreneurs
        </h1>
        <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-brandGray ">
          Elevate your online presence with bespoke digital solutions tailored to your unique vision.
        </p>
        <div className="mt-10 flex justify0center gap-5">
          <button className="btn-primary shadow-md shadow-brandGold/20">Work With Us</button>
          <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-brandGold transition-colors duration-300">
            See Case Studies
          </button>
        </div>
      </motion.div>

      {/*Background Glow*/}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brandGold/10 rounded-full blur-3xl"/>
    </section>
  );
}