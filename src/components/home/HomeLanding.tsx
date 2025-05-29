"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tab from "../tabs/tab";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  {
    src: "/images/landing1.jpg",
    name: "The Seven Deadly Sins: Wrath of the Gods",
    genre: "Advanture",
  },
  {
    src: "/images/landing2.jpg",
    name: "Bleach",
    genre: "Horror",
  },
  {
    src: "/images/landing3.jpg",
    name: "One Piece",
    genre: "Advanture",
  },
];

export default function HomeLanding() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-[30vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 w-full h-[30vh] sm:h-[50vh] md:h-[60vh] aspect-3/2"
        >
          {/* Image */}
          <motion.img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].name}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1 }, ease: "easeInOut" }}
          />

          {/* Overlay Content */}
          <motion.div
            className="absolute inset-0 flex flex-col space-y-4 sm:space-y-10 items-center justify-center bg-black/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tab title={images[currentImageIndex].genre} variant="genre" />
            <motion.h1
              className="max-w-xl text-base sm:text-4xl md:text-5xl font-bold text-white text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {images[currentImageIndex].name}
            </motion.h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Next and Previous Buttons */}
      <button
        onClick={prevImage}
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous"
      >
        <ArrowLeft className="text-primary" />
      </button>
      <button
        onClick={nextImage}
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next"
      >
        <ArrowRight className="text-primary" />
      </button>

      {/* Optional: Manual Image Controls (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentImageIndex === index ? "bg-primary" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
