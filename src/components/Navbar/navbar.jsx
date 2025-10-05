"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, MapPin, Mail, Users, Award, Target, BookOpen, Briefcase, Scale, Heart, Globe, Phone, Quote } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import logo1 from '../../components/Navbar/assests/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownTimeoutRef = useRef(null);
    const router = useRouter();

    const handleScrollToSection = (sectionId) => {
      if (window.location.pathname !== "/") {
        router.push(`/#${sectionId}`);
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      setActiveDropdown(null);
    };

    const handleMouseEnter = (dropdown) => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150);
    };

    const handleDropdownItemClick = () => {
      setActiveDropdown(null);
      setIsMenuOpen(false);
    };
    useEffect(() => {
      return () => {
        if (dropdownTimeoutRef.current) {
          clearTimeout(dropdownTimeoutRef.current);
        }
      };
    }, []);

    return (
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-5 py-1.5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center pl-2.5">
              <Link href="/" passHref>
                <Image
                  height={150}
                  width={200}
                  src={logo1}
                  alt="Message illustration"
                  className="rounded-2xl"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 pr-8">
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <span>About Us</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-red-500 border-2 py-2 transition-all duration-200 ${
                  activeDropdown === 'about' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <button
                    onClick={() => {
                      handleScrollToSection('about');
                      handleDropdownItemClick();
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                  >
                    About PRABHAVEE
                  </button>
                  <Link 
                    href="/background" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Background
                  </Link>
                  <Link 
                    href="/networking" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Our Networks, Memberships and Collaborations
                  </Link>
                  <Link 
                    href="/journey" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Our Journey
                  </Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-2 border-red-500 py-2 transition-all duration-200 ${
                  activeDropdown === 'services' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <a 
                    href="#professional-services" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Professional Services
                  </a>
                  <a 
                    href="#training" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Training & Capacity Building
                  </a>
                  <a 
                    href="#posh" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    PoSH Services
                  </a>
                </div>
              </div>

              <a 
                href="#who-we-serve" 
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                Who We Serve
              </a>
              
              <a 
                href="#people" 
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                People
              </a>

              {/* Engagements Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('engagements')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <span>Engagements</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'engagements' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-red-500 border-2 py-2 transition-all duration-200 ${
                  activeDropdown === 'engagements' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <Link 
                    href="/events" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Events
                  </Link>
                  <Link 
                    href="/stakeInitiatives" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Stakeholder engagement & Initiatives
                  </Link>
                  <Link 
                    href="/journey" 
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={handleDropdownItemClick}
                  >
                    Collaborative projects
                  </Link>
                </div>
              </div>

              <a 
                href="#contact" 
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#about" 
                className="block text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#who-we-serve" 
                className="block text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Serve
              </a>
              <a 
                href="#people" 
                className="block text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                People
              </a>
              <a 
                href="#engagements" 
                className="block text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Engagements
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    );
};

export default Navbar;