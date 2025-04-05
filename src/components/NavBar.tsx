"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/assets/Brand - Blue 2 [SVG].svg'
import right from '../../public/assets/right.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  
  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set current path on component mount and when URL changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Add event listener for path changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="relative z-10 w-full px-4 md:px-8 lg:px-0 flex justify-between items-center mt-8 lg:mt-9 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="w-40 md:w-60">
        <Image src={logo} alt="logo" className="w-full h-auto" />
      </div>

      {/* Mobile menu button */}
      <button 
        className="block md:hidden text-gray-800"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="font-barlow text-base"
          >
            <span className={`hover:font-bold hover:underline ${currentPath === '/' ? 'text-blue-500' : 'text-gray-900'}`}>
              Heromatic
            </span>
          </Link>
          <Link 
            href="/services" 
            className="font-barlow text-base"
          >
            <span className={`hover:font-bold hover:underline ${currentPath === '/services' ? 'text-blue-500' : 'text-gray-900'}`}>
              Services
            </span>
          </Link>
          <Link 
            href="/about" 
            className="font-barlow text-base"
          >
            <span className={`hover:font-bold hover:underline ${currentPath === '/about' ? 'text-blue-500' : 'text-gray-900'}`}>
              Our Story
            </span>
          </Link>
        </div>

        <Link href="/form">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 font-barlow text-sm hover:bg-blue-600 transition-colors">
            <span>Contact Us</span>
            <Image src={right} alt="right" className="w-3 h-3" />
          </button>
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white flex-col w-full p-4 shadow-lg`}>
        <Link 
          href="/" 
          className="block py-3 px-4 text-center font-barlow text-base"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`hover:font-bold hover:underline ${currentPath === '/' ? 'text-blue-500' : 'text-gray-900'}`}>
            Heromatic
          </span>
        </Link>
        <Link 
          href="/services" 
          className="block py-3 px-4 text-center font-barlow text-base"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`hover:font-bold hover:underline ${currentPath === '/services' ? 'text-blue-500' : 'text-gray-900'}`}>
            Services
          </span>
        </Link>
        <Link 
          href="/about" 
          className="block py-3 px-4 text-center font-barlow text-base"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`hover:font-bold hover:underline ${currentPath === '/about' ? 'text-blue-500' : 'text-gray-900'}`}>
            Our Story
          </span>
        </Link>
        <Link 
          href="/form"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4"
        >
          <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 font-barlow text-sm w-full">
            <span>Contact Us</span>
            <Image src={right} alt="right" className="w-3 h-3" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;