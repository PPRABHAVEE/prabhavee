"use client";
import React, { useState } from "react";
import {
  Calendar,
  Filter,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";
import events from "./stockData";

const EventsPage = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

  const years = ["all", ...new Set(events.map((e) => e.year))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return b - a;
  });

  const eventTypes = ["all", ...new Set(events.map((e) => e.eventType))];

  const filteredEvents = events.filter((event) => {
    const matchesYear =
      selectedYear === "all" || event.year.toString() === selectedYear;
    const matchesType = selectedType === "all" || event.eventType === selectedType;
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  const openLightbox = (images, idx) => {
  setLightbox({ open: true, images, index: idx });
  document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightbox({ open: false, images: [], index: 0 });
    document.body.style.overflow = "auto";
  };

  // ---------------- Collage ----------------
  const ImageCollage = ({ images }) => {
    const imageCount = images.length;
    if (imageCount === 1) {
      return (
        <div className="relative h-64 overflow-hidden">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
            onClick={() => openLightbox(images, 0)}
          />
        </div>
      );
    }
    if (imageCount === 2) {
      return (
        <div className="grid grid-cols-2 gap-1 h-64">
          {images.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
                onClick={() => openLightbox(images, idx)}
              />
            </div>
          ))}
        </div>
      );
    }
    if (imageCount === 3) {
      return (
        <div className="grid grid-cols-2 gap-1 h-64">
          <div className="relative overflow-hidden">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
              onClick={() => openLightbox(images, idx)}
            />
          </div>
          <div className="grid grid-rows-2 gap-1">
            {images.slice(1, 3).map((img, idx) => (
              <div key={idx} className="relative overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
                  onClick={() => openLightbox(images, idx)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (imageCount === 4) {
      return (
        <div className="grid grid-cols-2 gap-1 h-64">
          {images.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
                onClick={() => openLightbox(images, idx)}
              />
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="grid grid-cols-3 gap-1 h-64">
        <div className="col-span-2 row-span-2 relative overflow-hidden">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onClick={() => openLightbox(images, idx)}
          />
        </div>
        {images.slice(1, 5).map((img, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              onClick={() => openLightbox(images, idx)}
            />
            {idx === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  +{images.length - 5}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // ---------------- Carousel ----------------
  const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative h-64 overflow-hidden group">
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-fill transition-all duration-500"
          onClick={() => openLightbox(images, currentIndex)}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-white w-8"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  // ---------------- Scrollable Grid ----------------
  const ScrollableImageGrid = ({ images }) => (
    <div className="flex gap-3 p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-70 h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform hover:scale-105"
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
             onClick={() => openLightbox(images, idx)}
          />
        </div>
      ))}
    </div>
  );

  // ---------------- Page Layout ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-5">
      <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-amber-400 to-orange-500">
            Events, Dialogues & Engagements
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connecting with global stakeholders to drive{" "}
            <span className="text-amber-400 font-semibold">social impact</span>,
            promote <span className="text-red-400 font-semibold">ethical leadership</span>, and advance
            <span className="text-gray-100 font-semibold"> sustainable development</span>.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20" >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none appearance-none bg-white"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "all" ? "All Years" : year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none appearance-none bg-white "
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredEvents.length} of {events.length} events
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
            <div className="absolute top-1 left-2 z-40">
              <span className=" bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg border-3 border-white text-lg">
                {index + 1}
              </span>
            </div>
              <div className="relative p-2 bg-gradient-to-br from-red-600 via-black to-red-800">
                <div className="overflow-hidden rounded-lg bg-gray-200">
                  {event.displayType === "collage" && (
                    <ImageCollage images={event.images} />
                  )}
                  {event.displayType === "carousel" && (
                    <ImageCarousel images={event.images} />
                  )}
                  {event.displayType === "scroll" && (
                    <ScrollableImageGrid images={event.images} />
                  )}
                </div>
                <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                  {event.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                  {event.name}
                </h3>
               {Array.isArray(event.subName) && event.subName.length > 0 && (
                  <ul className="list-disc pl-6 mt-2 space-y-1 mb-3 ">
                    {event.subName.map((session, idx) => (
                      <li key={idx} className="text-gray-800 hover:text-red-600 cursor-pointer hover:font-medium">{session}</li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-black text-white px-3 py-2 text-center md:px-3 md:py-1 rounded-full text-sm font-medium">
                      {event.eventType}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-3">
                    <Users className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="text-base font-medium">
                      {event.participationType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No events found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-300 group"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] flex items-center animate-scaleIn"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.images[lightbox.index]}
              alt=""
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
