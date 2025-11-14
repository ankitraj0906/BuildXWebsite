import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-brandGray pt-24 pb-12 border-t border-[#1b1b1b]">
      {/* TOP DECORATIVE BAR */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-brandGold to-transparent opacity-50 mb-16"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-14">
        {/* BRAND BLOCK */}
        <div>
          <h2 className="text-white font-bold text-3xl tracking-wide">
            Build<span className="text-brandGold">X</span>Layer
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed text-sm max-w-xs">
            We design, build, and launch world-class digital products. From SaaS
            platforms to mobile apps — we bring ideas to life with clean design,
            strong engineering, and startup-friendly speed.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-brandGold transition cursor-pointer">
              App Development
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              UI/UX Product Design
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Brand & Identity
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              MVP Development
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Startup Growth & Strategy
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-brandGold transition cursor-pointer">
              Our Work
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Process
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Careers
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Blog
            </li>
            <li className="hover:text-brandGold transition cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* SOCIAL & CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
          <p className="text-gray-400 text-sm mb-4">
            Follow us for updates, insights, and behind-the-scenes.
          </p>
          <div className="flex space-x-6 text-2xl mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandGold transition"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/company/buildxlayer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandGold transition"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandGold transition"
            >
              <FiTwitter />
            </a>
          </div>

          <p className="text-sm text-gray-500">contact@buildxlayer.com</p>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="mt-20 w-full h-[1px] bg-[#1b1b1b]"></div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-600 mt-6">
        © {new Date().getFullYear()} BuildX Layer — Building the future, one
        product at a time.
      </div>
    </footer>
  );
}
