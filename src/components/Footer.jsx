import React from 'react';
import {FiGithub, FiLinkedin,FiTwitter} from 'react-icons/fi';

export default function Footer(){
  return(
    <footer className="bg-[#111111] text-brandGray py-10 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-white font-semibold text-lg">BuildX Layer</h2>
          <p className="text-sm mt-2 text-gray-400">Tagline</p>

        </div>
        <div className="flex space-x-6 text-xl">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandGold transition-colors duration-300"
          >
            <FiGithub />
          </a>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandGold transition-colors duration-300"
          >
            <FiLinkedin />
          </a>
          <a 
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandGold transition-colors duration-300"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} BuildX Layer. All rights reserved.
      </div>
    </footer>
  );
}