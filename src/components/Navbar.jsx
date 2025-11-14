import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/BuildXLayer.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Link styling logic
  const linkClasses = (path) =>
    `relative px-5 py-2 rounded-full font-medium transition-all duration-300
     ${
       location.pathname === path
         ? "bg-yellow-400 text-black shadow-md"
         : "text-white hover:bg-yellow-400 hover:text-black hover:shadow-lg"
     }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brandBlack/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="BuildXLayer Logo"
            className="h-10 object-contain mix-blend-screen"
          />
        </div>

        {/* Centered Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/services" className={linkClasses("/services")}>
            Services
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </div>

        {/* Right-side button (optional) */}
        <div className="hidden md:flex items-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brandBlack border-t border-gray-800 flex flex-col items-center py-6 space-y-4 animate-fadeIn">
          <Link to="/" className={linkClasses("/")} onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className={linkClasses("/about")}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className={linkClasses("/services")}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={linkClasses("/contact")}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <button
            onClick={closeMenu}
            className="bg-yellow-400 text-black px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
