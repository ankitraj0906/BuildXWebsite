import React from 'react';
import { FiCode, FiPenTool, FiTrendingUp } from 'react-icons/fi';

const services = [
  {
    title: 'Product Design',
    desc: 'UX, UI, prototyping, and research to craft user-centric experiences.',
    icon: <FiPenTool size={32} className="text-brandGold mb-4" />,
  },
  {
    title: 'Engineering',
    desc: 'Frontend, backend, and full-stack development with scalable architecture.',
    icon: <FiCode size={32} className="text-brandGold mb-4" />,
  },
  {
    title: 'Growth',
    desc: 'Data-driven marketing, acquisition, and performance optimization.',
    icon: <FiTrendingUp size={32} className="text-brandGold mb-4" />,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-brandBlack text-center" id="services">
      <h2 className="text-4xl font-bold text-white mb-10">What We Do</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-[#111111] rounded-xl border border-gray-800 hover:border-brandGold hover:scale-105 transform transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-brandGray leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
