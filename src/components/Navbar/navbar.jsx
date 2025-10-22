"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../components/Navbar/assests/logo.png";

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
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
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
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg" >
      <div className="px-5 py-1.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-0 md:pl-2.5">
            <Link href="/" passHref>
              <Image
                height={100}
                width={150}
                src={logo1}
                alt="Prabhavee Logo"
                className="rounded-2xl w-38 md:w-48 lg:w-50 transition-all duration-200"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 pr-8">
            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                <span>About Us</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-red-500 border-2 py-2 transition-all duration-200 ${
                  activeDropdown === "about"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <button
                  onClick={() => {
                    handleScrollToSection("about");
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
                  Our Networks, Memberships & Collaborations
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
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-red-500 border-2 py-2 transition-all duration-200 ${
                  activeDropdown === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  href="/services"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  Professional Services
                </Link>
                <Link
                  href="/training"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  Training & Capacity Building
                </Link>
                <Link
                  href="/posh"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  PoSH Consultancy & Services
                </Link>
              </div>
            </div>
            <Link
              href="/whoWeServe"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
            >
              Who We Serve
            </Link>
            {/* People Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("people")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                <span>People</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "people" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-red-500 border-2 py-2 transition-all duration-200 ${
                  activeDropdown === "people"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  href="/people/founder"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  Founder
                </Link>
                <Link
                  href="/people/consultant"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  External Consultants & Alumni
                </Link>
              </div>
            </div>
            {/* Engagements Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("engagements")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                <span>Engagements</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "engagements" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border-red-500 border-2 py-2 transition-all duration-200 ${
                  activeDropdown === "engagements"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  href="/events"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  Events
                </Link>
                <Link
                  href="/stakeholder"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  Stakeholder Engagement & Initiatives
                </Link>
                <Link
                  href="/posh_workshop"
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50"
                  onClick={handleDropdownItemClick}
                >
                  Collaborative Projects
                </Link>
              </div>
            </div>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-7 py-3 space-y-3">
            {[
              { name: "About Us", key: "about" },
              { name: "Services", key: "services" },
              { name: "Who We Serve", key: "whoWeServe" },
              { name: "People", key: "people" },
              { name: "Engagements", key: "engagements" },
              { name: "Contact Us", key: "contact" },
            ].map((item) => (
              <div key={item.key}>
                {["about", "services", "people", "engagements"].includes(item.key) ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.key)}
                      className="w-full flex justify-between items-center text-gray-700 font-medium py-2 hover:text-red-600"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          activeDropdown === item.key ? "rotate-180 text-red-600" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.key && (
                      <div className="ml-4 border-l border-gray-200 pl-4 space-y-2">
                        {item.key === "about" && (
                          <>
                            <button onClick={() => { handleScrollToSection("about"); handleDropdownItemClick(); }} className="block text-gray-600 hover:text-red-500">
                             About PRABHAVEE
                            </button>
                            <Link href="/background" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Background
                            </Link>
                            <Link href="/networking" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Our Networks, Memberships and Collaborations
                            </Link>
                            <Link href="/journey" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Our Journey
                            </Link>
                          </>
                        )}
                        {/* Services Dropdown */}
                        {item.key === "services" && (
                          <>
                            <Link href="/services" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Professional Services
                            </Link>
                            <Link href="/training" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Training & Capacity Building
                            </Link>
                            <Link href="/posh" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              PoSH Consultancy & Services
                            </Link>
                          </>
                        )}
                        {/* People Dropdown */}
                        {item.key === "people" && (
                          <>
                            <Link href="/people/founder" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Founder
                            </Link>
                            <Link href="/people/consultant" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              External Consultants & Alumni
                            </Link>
                          </>
                        )}
                        {/* Engagements Dropdown */}
                        {item.key === "engagements" && (
                          <>
                            <Link href="/events" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Events
                            </Link>
                            <Link href="/stakeholder" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Stakeholder engagement & Initiatives
                            </Link>
                            <Link href="/posh_workshop" onClick={handleDropdownItemClick} className="block text-gray-600 hover:text-red-500">
                              Collaborative projects
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.key === "whoWeServe" ? "/whoWeServe" : "#contact"}
                    className="block text-gray-700 hover:text-red-600 font-medium py-2"
                    onClick={handleDropdownItemClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;