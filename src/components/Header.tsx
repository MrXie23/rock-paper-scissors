'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl flex items-center">
              <span className="text-purple-400">WasteTime</span>
              <span className="text-white">Games</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-6">
            {/* Dropdown for IdleGame */}
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center space-x-1 py-2 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Games</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link 
                    href="/rockpaperscissors" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeDropdown}
                  >
                    Rock Paper Scissors
                  </Link>
                </div>
              )}
            </div>
            
            {/* About Link */}
            <Link 
              href="/about" 
              className="py-2 hover:text-purple-300 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 