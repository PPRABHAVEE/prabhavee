"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, MapPin, Mail, Users, Award, Target, BookOpen, Briefcase, Scale, Heart, Globe, Phone, Quote, Linkedin } from 'lucide-react';
import Image from "next/image";
import logo1 from '../../components/Navbar/assests/logo.png';

const footer = () => {
  return (
    <>
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-400 mr-4" />
                    <span>anumita@prabhavee.org</span>
                  </div>
                  <div className="flex items-center">
                  <a
                    href="https://www.linkedin.com/company/prabhavee/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 py-1.5 text-sm rounded-full group"
                  >
                  <svg className="w-7 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span> PRABHAVEE – Partner for Social Impact</span>
                </a>
                </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-400 mr-4" />
                    <span>Based in: India | Pan-India & Global <br></br>Collaborations</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Opportunities</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-red-400">Internship</h4>
                    <p className="text-gray-300 mt-2">Join our team for hands-on experience in social impact law and policy.</p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-red-400">Partner with us</h4>
                    <p className="text-gray-300 mt-2">Collaborate on initiatives that advance responsible business practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-200 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Image
                                          height={150}
                                          width={200}
                                          src={logo1}
                                          alt="Message illustration"
                                          className="rounded-2xl"
                                      />
            <p className="text-gray-600 mt-2 mb-4 text-base">
              Empowering Sustainable Progress through Strategic Capacity Building
            </p>
            <div className="text-base text-gray-500">
              © {new Date().getFullYear()} - Partner for Social Impact. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default footer