import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-opacity-30 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-brandGold flex items-center justify-center text-black font-bold">DL</div>
        <span className="text-white font-semibold">BuildX</span>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  )
}
