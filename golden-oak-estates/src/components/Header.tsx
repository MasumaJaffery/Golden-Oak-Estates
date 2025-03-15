import React, { useState } from "react";
import Logo from "./../imgs/Golden Oak/Golden Oak Logo.png";
import { BiMenu, BiX } from "react-icons/bi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white shadow-md z-50"> {/* Updated background and shadow */}
      <nav className="container mx-auto flex items-center justify-between py-5 px-32 text-gray-800"> {/* Updated text color */}
        {/* Logo Centered */}
        <div className="flex items-center">
      <img src={Logo} alt="Logo" className="h-16" />
    </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-sm tracking-widest uppercase">
          <li className="relative group">
            <a href="/" className="hover:text-gray-600">Home</a> {/* Updated hover color */}
            <div className="absolute left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </li>
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#services" className="hover:text-gray-600">Services</a></li>
          <li><a href="#" className="hover:text-gray-600"></a></li>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden md:flex">
          <a href="#contact" className="border border-gold text-gold py-2 px-6 uppercase text-sm tracking-widest hover:bg-gold hover:text-black transition">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-3xl text-gray-800">
          {isMenuOpen ? <BiX /> : <BiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center justify-center space-y-6 text-xl uppercase">
          {/* Close Button inside mobile menu */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-6 text-3xl text-gray-800"
          >
            <BiX />
          </button>
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>Floor Plan</a>
          <a href="#services" onClick={toggleMenu}>Features</a>
          <a href="#" onClick={toggleMenu}></a>
          <a 
            href="#contact" 
            onClick={toggleMenu} 
            className="border border-gold text-gold py-2 px-6 hover:bg-gold hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;