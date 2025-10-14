"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ImageModal({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.85 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
            {image.title && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
                {image.desc && (
                  <p className="text-gray-200 mt-2 text-sm max-w-lg mx-auto leading-relaxed">
                    {image.desc}
                  </p>
                )}
              </div>
            )}
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
