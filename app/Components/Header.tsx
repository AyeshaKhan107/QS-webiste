"use client";
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [signboardsOpen, setSignboardsOpen] = useState(false);
  const [stickersOpen, setStickersOpen] = useState(false);
  const [mobileSignboardsOpen, setMobileSignboardsOpen] = useState(false);
  const [mobileStickersOpen, setMobileStickersOpen] = useState(false);

  const signboardItems = [
    { id: 1, name: 'Outdoor Signboards', href: '/signboards/outdoor' },
    { id: 2, name: 'Indoor Signboards', href: '/signboards/indoor' },
    { id: 3, name: 'Flex Signboards', href: '/signboards/flex' },
    { id: 4, name: ' 3D Acrylic Signs', href: '/signboards/acrylic' },
    { id: 5, name: 'Neon Signs', href: '/signboards/neon' },
    { id: 6, name: 'Mall Signboard', href: '/signboards/mall' },
    { id: 7, name: 'Rooftop Signboard', href: '/signboards/rooftop' },
    { id: 8, name: ' Parking Signboards', href: '/signboards/parking' },
  ];

  const stickerItems = [
    { id: 1, name: 'Sticker branding', href: '/stickers/sticker' },
    { id: 2, name: 'Vehicle branding', href: '/stickers/vehicle' },
    { id: 3, name: 'Vehicle full wrapping', href: '/stickers/full-wrapping' },
    { id: 4, name: 'Vehicle PPF', href: '/stickers/ppf' },
    { id: 5, name: 'Onevision Stickers', href: '/stickers/onevision' },
    { id: 6, name: 'Frosted Cutting Stickers', href: '/stickers/frosted' },

  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-[#A4C32C]">
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#A4C32C] to-[#7A9C1A] bg-clip-text text-transparent hover:scale-103 transition-transform duration-100">
              QAMAR ADVERTISING
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="px-2 py-2 text-gray-700 hover:text-[#A4C32C] font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A4C32C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Signboards Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSignboardsOpen(true)}
              onMouseLeave={() => setSignboardsOpen(false)}
            >
              <button className="px-2 py-2 text-gray-700 hover:text-[#A4C32C] font-medium transition-colors duration-200 flex items-center gap-1 group">
                Signboards
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${signboardsOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A4C32C] group-hover:w-full transition-all duration-300"></span>
              </button>
              {signboardsOpen && (
                <div className="absolute top-full left-0 mt-0.5 mb-0 w-56  shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  {signboardItems.map((item, index) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`block px-4 py-2 mb-1 bg-white text-gray-700 hover:bg-[#A4C32C]/80 hover:text-white transition-colors duration-150 ${index < signboardItems.length - 1 ? 'mb-px border-b border-gray-100' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Stickers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setStickersOpen(true)}
              onMouseLeave={() => setStickersOpen(false)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-[#A4C32C] font-medium transition-colors duration-200 flex items-center gap-1 group">
                Stickers
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${stickersOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A4C32C] group-hover:w-full transition-all duration-300"></span>
              </button>
              {stickersOpen && (
               <div className="absolute top-full left-0 mt-0.5 mb-0 w-56  shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  {stickerItems.map((item, index) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`block px-4 py-2 mb-1 bg-white text-gray-700 hover:bg-[#A4C32C]/80 hover:text-white transition-colors duration-150 ${index < signboardItems.length - 1 ? 'mb-px border-b border-gray-100' : ''}`}
                   >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="px-2 py-2 text-gray-700 hover:text-[#A4C32C] font-medium transition-colors duration-200 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A4C32C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-[#A4C32C] to-[#8FB023] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#A4C32C] focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link href="/" className="block py-3 px-4 text-gray-700 hover:bg-[#A4C32C]/10 hover:text-[#A4C32C] rounded-lg transition-colors duration-150">
              Home
            </Link>
            
            {/* Mobile Signboards Dropdown */}
            <div>
              <button
                onClick={() => setMobileSignboardsOpen(!mobileSignboardsOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-[#A4C32C]/10 hover:text-[#A4C32C] rounded-lg transition-colors duration-150"
              >
                Signboards
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSignboardsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSignboardsOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {signboardItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-[#A4C32C] transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Stickers Dropdown */}
            <div>
              <button
                onClick={() => setMobileStickersOpen(!mobileStickersOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-[#A4C32C]/10 hover:text-[#A4C32C] rounded-lg transition-colors duration-150"
              >
                Stickers
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileStickersOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileStickersOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {stickerItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-[#A4C32C] transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="block py-3 px-4 text-gray-700 hover:bg-[#A4C32C]/10 hover:text-[#A4C32C] rounded-lg transition-colors duration-150">
              About Us
            </a>
            <a href="/contact" className="block py-3 px-4 mt-2 bg-gradient-to-r from-[#A4C32C] to-[#8FB023] text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-200">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}