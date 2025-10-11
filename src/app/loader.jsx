"use client";
import { useState, useEffect } from "react";
export default function Loader() {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-600 border-r-red-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-amber-500 border-l-amber-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-4 rounded-full border-3 border-transparent border-t-gray-700 border-r-gray-600 animate-spin" style={{ animationDuration: '2s' }}></div>
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-red-100 via-amber-50 to-white animate-pulse"></div>
        <div className="relative z-10 flex items-center justify-center">
          <span className="text-4xl font-bold text-red-600">P</span>
          <span className="text-4xl font-bold text-amber-500">/</span>
        </div>
      </div>
      <div className="mt-8 flex items-center space-x-1">
        <span className="text-2xl font-bold text-gray-900">PRABHAVEE</span>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-500 tracking-wide">Partner for Social Impact</p>
      
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-gray-800">
          Loading{dots}
        </p>
        <p className="mt-2 text-sm text-gray-600 max-w-md px-4">
          Please wait while we fetch the content for you
        </p>
      </div>

      <div className="mt-6 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 animate-pulse" style={{ width: '60%', animation: 'pulse 1.5s ease-in-out infinite' }}></div>
      </div>

      <div className="mt-6 flex space-x-2">
        <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}