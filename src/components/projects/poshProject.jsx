"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from './subExpansion/imgExpansion';
import prabhaveeLogo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import Image from 'next/image';
import img1 from './assets/Posh Pro.png';
import img2 from './assets/PoSH Workshop with special guests.png';
import img3 from './assets/Trainer & Facilitators Meet the Experts.png';
import img4 from './assets/IMG-20250925-WA0007.jpg';
import img5 from './assets/IMG-20250925-WA0008.jpg';
import img6 from './assets/IMG-20250926-WA0003.jpg';
import img7 from './assets/IMG-20250926-WA0002.jpg';
export default function PoSHWorkshop() {
  const [scrollY, setScrollY] = useState(0);
   const [hoveredIdx, setHoveredIdx] = useState(null);
   const [expandedImg, setExpandedImg] = useState(null);
   const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
        src: img1,
        alt: "About PoSH Pro",
        title: "PoSH Pro Workshop",
        desc:
        "A 2-day online workshop on Prevention of Sexual Harassment (PoSH) at the Workplace, focused on awareness, law, best practices and  to enhance awareness and build capacity on PoSH.",
    },
    {
        src:img2,
        alt: "Trainers & Facilitators",
        title: "Expert-Led Practical Training",
        desc:
        "Learn directly from experienced legal professionals, HR experts, and corporate trainers who bridge theory and real-world application.",
    },
    {
        src: img3,
        alt: "Special Guests",
        title: "Panel Insights ",
        desc:
        "Panel discussions with a practising lawyer from a law firm and a Senior Professional from Corporate, this workshop provides foundational and practical insights into fostering safer and more inclusive work environments.",
    },
    ];
    const images = [
        { id: 1, src: img4, alt: 'Panel Discussion', span: 'col-span-2 row-span-2' },
        { id: 2, src: img5, alt: 'Workshop Session', span: 'col-span-1 row-span-1' },
        { id: 3, src: img6, alt: 'Training Presentation', span: 'col-span-1 row-span-1' },
        { id: 4, src: img7, alt: 'Group Photo', span: 'col-span-1 row-span-1' },
    ]

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  return (
    <div className="bg-white text-gray-900 overflow-hidden pt-18">
        <div className=" bg-gradient-to-br from-red-200 via-orange-100 to-amber-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-300 to-red-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-60 w-32 h-32 border-4 border-red-800 rotate-45"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-4 border-purple-900 rounded-full"></div>
            <div className="absolute bottom-40 left-1/4 w-40 h-40 border-4 border-orange-900 rotate-12"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 border-4 border-pink-900 rounded-full"></div>
        </div>
        <div className="absolute top-0 left-0 w-128 h-128 bg-red-400 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
        <div className="absolute top-8 left-1/3 w-16 h-16 bg-red-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-60 left-0 w-50 h-50 bg-red-200 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2 "></div>
        <div className="absolute bottom-60 right-0 w-50 h-50 bg-orange-200 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2 "></div>
        <div className="absolute bottom-80 right-0 w-50 h-50 bg-red-200 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2 "></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-amber-300 rounded-full opacity-70"></div>

        <div className="relative z-10 container mx-auto px-4 py-16 pb-0 flex flex-col items-center">

        <h1 className="text-6xl md:text-7xl font-bold text-center mb-6  bg-gradient-to-r from-red-500 via-brown-600 to-violet-950 bg-clip-text text-transparent">
            PoSH Pro Workshop
        </h1>

        <div className="border-2 border-red-700 rounded-full px-6 py-2 mb-8 bg-amber-50">
          <p className="text-xl md:text-xl font-semibold text-gray-800">
            Prevention of Sexual Harrasment at Workplace
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 rounded-full flex items-center gap-3 shadow-lg h-12">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
            </svg>
            <span className="text-base font-semibold">2-Day Online Workshop</span>
          </div>

          <div className="border-2 border-red-700 bg-white px-8 py-4 rounded-full flex items-center gap-3 shadow-lg h-12">
            <div className=''>
              <p className="text-lg font-bold text-gray-800">Interactive Virual Sessions</p>
            </div>
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
          </div>
        </div>
        <div className="flex gap-2 mb-8">
          {[...Array(17)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" 
                 style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
        <h2 className="text-4xl font-bold text-gray-700 mb-8">Organized By</h2>
        <div className="flex gap-12 items-center justify-center mb-3">
            <div className="flex flex-col items-center">
              <Image src={prabhaveeLogo} alt="PRABHAVEE Logo"
                width={190}
                height={60}
                className="mb-1 rounded-md object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image src={logo2} alt=" Logo"
                width={160}
                height={60}
                className="mb-1 rounded-md object-contain"
              />
            </div>
        </div>
        <div className="flex flex-col items-center space-y-1 mb-8">
            <svg className="w-14 h-14 text-red-600 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="w-14 h-14 text-red-600 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{animationDelay: '0.2s'}}>
                <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
      </div>
    </div>
    <section className="py-10 relative bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-5xl font-bold text-gray-900 mb-6">
            About the <span className="text-red-600">Workshop</span>
          </h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-red-600">PRABHAVEE</span> — <strong>Partner for Social Impact</strong>, in collaboration with{" "}
            <span className="font-semibold text-amber-400">Yellow Spark</span> — <strong>Strategic HR Consultants</strong>, presents{" "}
            <span className="font-semibold text-red-600">PoSH Pro</span>: a 2-day online Workshop on Prevention of Sexual Harassment (PoSH) at the Workplace. It is designed to bridge the gap between law and practice by
             simplifying complex provisions of the Act and showcasing how effective implementation can shape equitable workspaces.
              For Law students, this workshop serves as a gateway to a rapidly expanding field of PoSH law Consulting and Practice. 
              Most legal education curriculum only touch upon the theory of the PoSH Act. However, practical expertise in workplace compliance and being part of internal committees is increasingly sought after.
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <div
            className={`flex flex-wrap justify-center gap-8 transition-all duration-700 ${
              hoveredIdx === 0 || hoveredIdx === 1 ? "items-start" : "items-center"
            }`}
          >
            <motion.div
              layout
              className={`relative cursor-pointer transition-all duration-700 ${
                hoveredIdx === 1 ? "order-2 mt-8" : "order-1"
              }`}
              onMouseEnter={() => setHoveredIdx(0)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
            <div
                className={`rounded-3xl border-4 overflow-hidden shadow-lg transition-all duration-500 ${
                  hoveredIdx === 0
                    ? "border-transparent bg-gradient-to-r from-red-400 to-orange-400 p-[2px] scale-105"
                    : "border-gray-200 scale-100"
                }`}
            >
                <div className="bg-white rounded-3xl overflow-hidden">
                  <Image
                    src={features[0].src}
                    alt={features[0].alt}
                    width={300}
                    height={400}
                    className="w-72 h-96 object-cover object-center"
                    onClick={() =>
                        setExpandedImg({
                            src: features[0].src,
                            alt: features[0].alt,
                        })
                    }
                  />
                </div>
              </div>
              {hoveredIdx === 0 && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-full ml-8 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-20"
                  >
                    <h4 className="text-2xl font-bold text-red-600 mb-2">{features[0].title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{features[0].desc}</p>
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
            <motion.div
              layout
              className={`relative cursor-pointer transition-all duration-700 ${
                hoveredIdx === 0 ? "order-3 mt-8" : "order-2"
              }`}
              onMouseEnter={() => setHoveredIdx(1)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className={`rounded-3xl border-4 overflow-hidden shadow-lg transition-all duration-500 ${
                  hoveredIdx === 1
                    ? "border-transparent bg-gradient-to-r from-red-400 to-orange-400 p-[2px] scale-105"
                    : "border-gray-200 scale-100"
                }`}
              >
                <div className="bg-white rounded-3xl overflow-hidden">
                  <Image
                    src={features[1].src}
                    alt={features[1].alt}
                    width={300}
                    height={400}
                    className="w-72 h-96 object-fill object-center"
                    onClick={() =>
                        setExpandedImg({
                            src: features[1].src,
                            alt: features[1].alt,
                        })
                    }
                  />
                </div>
              </div>
              {hoveredIdx === 1 && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 right-full mr-8 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-20"
                  >
                    <h4 className="text-2xl font-bold text-red-600 mb-2">{features[1].title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{features[1].desc}</p>
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
            <motion.div
              layout
              className="relative cursor-pointer transition-all duration-700 order-3"
              onMouseEnter={() => setHoveredIdx(2)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className={`rounded-3xl border-4 overflow-hidden shadow-lg transition-all duration-500 ${
                  hoveredIdx === 2
                    ? "border-transparent bg-gradient-to-r from-red-400 to-orange-400 p-[2px] scale-105"
                    : "border-gray-200 scale-100"
                }`}
              >
                <div className="bg-white rounded-3xl overflow-hidden">
                  <Image
                    src={features[2].src}
                    alt={features[2].alt}
                    width={300}
                    height={400}
                    className="w-72 h-96 object-fill"
                    onClick={() =>
                        setExpandedImg({
                            src: features[2].src,
                             alt: features[2].alt,
                        })
                    }
                  />
                </div>
              </div>
            </motion.div>
          </div>
          {hoveredIdx === 2 && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-lg text-center"
              >
                <h4 className="text-2xl font-bold text-red-600 mb-2">{features[2].title}</h4>
                <p className="text-gray-700 text-base leading-relaxed">{features[2].desc}</p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <ImageModal image={expandedImg} onClose={() => setExpandedImg(null)} />
      </div>
      <div className='flex items-center justify-center'>
        <div className="text-center text-base font-medium text-red-500 p-2  mt-4 border-2 border-red-500 rounded-lg bg-red-200 max-w-md">
                Click images to see the expanded view
        </div>
      </div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
    </section>

    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="text-gray-900">Glimpses: </span>
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                PoSH Training & Workshop
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 rounded-full"></div>
            </h2>
          </div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering organizations through comprehensive training and awareness programs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div onClick={() => openImage(images[0])} className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                        src={images[0].src}
                        alt={images[0].alt}
                    />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <p className="text-white font-semibold text-lg">Interactive Panel Discussion</p>
                </div>
            </div>
            <div onClick={() => openImage(images[1])} className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                        src={images[1].src}
                        alt={images[1].alt}
                        className="object-contain"
                    />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                <p className="text-white font-semibold">Comprehensive Workshop Session</p>
                </div>
            </div>
            <div onClick={() => openImage(images[2])}className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
                        src={images[2].src}
                        alt={images[2].alt}
                    />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                <p className="text-white font-semibold text-sm">Expert Training Sessions</p>
                </div>
            </div>
            <div onClick={() => openImage(images[3])} className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                        src={images[3].src}
                        alt={images[3].alt}
                    />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                <p className="text-white font-semibold text-sm">Engaged Participants</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center mt-4'>
            <div className="text-center text-base font-medium text-red-500 p-2  mt-4 border-2 border-red-500 rounded-lg bg-red-200 max-w-md">
                    Click images to see the expanded view
            </div>
        </div>
        <div className="relative mt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
    {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-300 group z-50"
            aria-label="Close"
          >
            <svg 
              className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="relative max-w-6xl max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}