import React, { useState } from "react";

const Navbar = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white bg-opacity-90 shadow-md rounded-b-xl py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / App Name */}
        <div className="flex items-center gap-2">
          <img src="src/assets/logo.ico" alt="Logo" className="w-8 h-8" />
          <span className="text-indigo-700 text-2xl font-bold tracking-wide">VoyageX</span>
        </div>
        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-indigo-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => setPage('home')} className="text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-1 rounded transition font-medium">Home</button>
          <a href="#features" className="text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-1 rounded transition font-medium">Features</a>
          <button onClick={() => setPage('converter')} className="text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-1 rounded transition font-medium">Currency Converter</button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white rounded-b-xl shadow-lg py-2">
          <button onClick={() => { setPage('home'); setMenuOpen(false); }} className="w-full text-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-2 rounded transition font-medium">Home</button>
          <a href="#features" className="w-full text-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-2 rounded transition font-medium" onClick={() => setMenuOpen(false)}>Features</a>
          <button onClick={() => { setPage('converter'); setMenuOpen(false); }} className="w-full text-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 px-3 py-2 rounded transition font-medium">Currency Converter</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
