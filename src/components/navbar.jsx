import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / App Name */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold tracking-wide">xApp</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-yellow-300 font-medium transition">Home</a>
            <a href="#features" className="text-white hover:text-yellow-300 font-medium transition">Features</a>
            <a href="https://imabhi165.github.io/Currency-Converter/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 font-medium transition">Currency converter Application</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
