import React, { useRef } from "react";
import { FiPenTool, FiCode, FiTrendingUp } from "react-icons/fi";
import { GridScan } from "../components/GridScan";
import VariableProximity from "../components/VariableProximity";

const services = [
  {
    title: "Product Design",
    desc: "UX, UI, prototyping, and research to craft user-centric experiences.",
    icon: <FiPenTool size={32} className="text-brandGold mb-4" />,
  },
  {
    title: "Engineering",
    desc: "Frontend, backend, and full-stack development with scalable architecture.",
    icon: <FiCode size={32} className="text-brandGold mb-4" />,
  },
  {
    title: "Growth",
    desc: "Data-driven marketing, acquisition, and performance optimization.",
    icon: <FiTrendingUp size={32} className="text-brandGold mb-4" />,
  },
];

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* 🟡 Glowing oval container with static GridScan */}
      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center text-center rounded-[60px] overflow-hidden shadow-[0_0_60px_rgba(245,179,0,0.4)]"
        style={{
          width: "90%",
          height: "80vh",
          border: "2px solid #F5B300",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* ✨ Static GridScan background */}
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.0} // ⚙️ No scan animation
            lineThickness={1}
            linesColor="#F5B300"
            gridScale={0.1}
            scanColor="#FFD54F"
            scanOpacity={0.0} // ⚙️ Disable scanning light
            enablePost
            bloomIntensity={0.0}
            chromaticAberration={0.001}
            noiseIntensity={0.0}
          />
        </div>

        {/* 🌀 “What We Do” title with VariableProximity */}
        <div className="relative z-10 mb-12">
          <h2 className="text-5xl font-extrabold text-white">
            <VariableProximity
              label="What We Do"
              className="text-white inline-block"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />
          </h2>
        </div>

        {/* 💼 Services cards */}
        <div className="relative z-10 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#111111]/80 rounded-xl border border-gray-800 hover:border-brandGold hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl text-white font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from 'react';
// import { FiCode, FiPenTool, FiTrendingUp } from 'react-icons/fi';

// const services = [
//   {
//     title: 'Product Design',
//     desc: 'UX, UI, prototyping, and research to craft user-centric experiences.',
//     icon: <FiPenTool size={32} className="text-brandGold mb-4" />,
//   },
//   {
//     title: 'Engineering',
//     desc: 'Frontend, backend, and full-stack development with scalable architecture.',
//     icon: <FiCode size={32} className="text-brandGold mb-4" />,
//   },
//   {
//     title: 'Growth',
//     desc: 'Data-driven marketing, acquisition, and performance optimization.',
//     icon: <FiTrendingUp size={32} className="text-brandGold mb-4" />,
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-20 bg-brandBlack text-center" id="services">
//       <h2 className="text-4xl font-bold text-white mb-10">What We Do</h2>
//       <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="p-8 bg-[#111111] rounded-xl border border-gray-800 hover:border-brandGold hover:scale-105 transform transition-all duration-300 shadow-lg"
//           >
//             <div className="flex flex-col items-center">
//               {service.icon}
//               <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
//               <p className="text-sm text-brandGray leading-relaxed">{service.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
