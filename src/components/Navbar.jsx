import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {FiMenu,FiX} from 'react-icons/fi';

export default function Navbar(){
  const[isOpen,setIsOpen]=useState(false);
  const[isScrolled,setIsScrolled]=useState(false);
  const location=useLocation();

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>30)setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[]);
  const toggleMenu=()=>setIsOpen(!isOpen);
  const closeMenu=()=>setIsOpen(false);
  const linkClasses=(path)=>
    `transition-all duration-300 hover:text-brandGold ${
      location.pathname===path?'text-brandGold border-b-2 border-brandGold pb-1':''
    }`;
  return(
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-brandGray ${
      isScrolled?'bg-brandBlack/80 backdrop-blur-lg shadow-mg':'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-brandGold rounded-md font-bold text-black">
              B X 
            </div>
            <span className="text-white font-semibold text-lg tracking-wide">
              BuildX Layer
            </span>
          </div>

          {/*Desktop Menu*/}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="about" className={linkClasses('/about')}>About</Link>
            <Link to="services" className={linkClasses('/contact')}>Contact</Link>
            <button className="btn-primary">Get Started</button>

          </div>
          {/*Mobile Toggle*/}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen?<FiX size={26}/>:<FiMenu size={26}/>}
            </button>
          </div>
        </div>
        {/*Mobile Menu*/}
        {isOpen&&(
          <div className="md:hidden bg-brandBlack border-t border-gray-800 flex flex-col items-center py-6 space-y-4 animate-fadeIn">
            <Link to="/" className={linkClasses('/')}onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className={linkClasses('/about')}onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className={linkClasses('/contact')} onClick={closeMenu}>
            Contact
            </Link>
            <button onClick={closeMenu} className="btn-primary w-40">
            Get Started
            </button>
          </div>
        )}
      </nav>
  )
}