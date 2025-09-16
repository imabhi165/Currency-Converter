import React, { useState } from "react";

const Navbar = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 py-2 px-4 rounded-b-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl backdrop-blur-lg border-b-4 border-indigo-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / App Name */}
        <div className="flex items-center gap-2 drop-shadow-xl">
          <img src="src/assets/logo.svg" alt="Logo" className="w-10 h-10 rounded-full border-2 border-white shadow-lg" />
          <span className="text-white text-3xl font-extrabold tracking-wide" style={{textShadow: '2px 2px 8px #6D28D9'}}>VoyageX</span>
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
        {/* Navigation Links + GitHub Button */}
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => setPage('home')} className="text-white hover:bg-white hover:text-indigo-600 px-4 py-2 rounded-xl transition font-semibold shadow-md border border-white/30">Home</button>
          <a href="#features" className="text-white hover:bg-white hover:text-indigo-600 px-4 py-2 rounded-xl transition font-semibold shadow-md border border-white/30">Features</a>
          <button onClick={() => setPage('converter')} className="text-white hover:bg-white hover:text-indigo-600 px-4 py-2 rounded-xl transition font-semibold shadow-md border border-white/30">Currency Converter</button>
          <a href="https://github.com/imabhi165" target="_blank" rel="noopener noreferrer" className="ml-2 px-3 py-2 rounded-xl bg-black hover:bg-gray-800 text-white font-bold shadow-lg flex items-center gap-2 border border-white/30 transition">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-2xl shadow-2xl py-2 border-t-4 border-indigo-300">
          <button onClick={() => { setPage('home'); setMenuOpen(false); }} className="w-full text-center text-white hover:bg-white hover:text-indigo-600 px-4 py-2 rounded-xl transition font-semibold shadow-md border border-white/30 mb-2">Home</button>
          <a href="#features" className="w-full text-center text-white hover:bg-white hover:text-indigo-600 px-4 py-2 rounded-xl transition font-semibold shadow-md border border-white/30 mb-2" onClick={() => setMenuOpen(false)}>Features</a>
          <button onClick={() => { setPage('converter'); setMenuOpen(false); }} className="w-full text-center text-white hover:bg-white hover:text-indigo-600 px-4 py-2 rounded-xl transition font-semibold shadow-md border border-white/30">Currency Converter</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
