"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./Slide";
import ProgressBar from "./ProgressBar";
import AssetSelector from "./AssetSelector";
import slides from "./SlideData";

export default function SlideSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentSlide]);

  // ✅ Reset to first slide when SlideSection goes out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setCurrentSlide(0);
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 } // adjust if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

 const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* ✅ Animate heading from center (slide 1) → sticky top (slides 2-7) */}
      <motion.div
        initial={{ y: 0, top: "50%", translateY: "-50%" }}
        animate={
          currentSlide === 0
            ? { top: "50%", translateY: "-50%" }
            : { top: "3rem", translateY: "0%" }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute left-1/2 transform -translate-x-1/2 text-center z-40 px-4"
      >
        <h1 className="text-2xl lg:text-4xl font-thin max-w-4xl">
          Evolving the drive with <span className="font-bold text-white">360-degree</span> <span>nonwoven solutions</span>
        </h1>
      </motion.div>

      {/* ✅ Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Slide slide={slides[currentSlide]} />
        </motion.div>
      </AnimatePresence>

      {/* ✅ Click anywhere to manually advance */}
      <div
        className="absolute inset-0 cursor-pointer z-20"
        onClick={() => {
          setIsPlaying(false);
          nextSlide();
        }}
      />

      {/* ✅ Progress bar on left */}
      <div className="absolute left-5 top-0 bottom-0 flex items-center z-30">
        <ProgressBar total={slides.length} current={currentSlide + 1} />
      </div>

      {/* ✅ Asset Thumbnails */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-3 z-30">
        {slides[currentSlide].assets.length > 0 && (
          <AssetSelector
            assets={slides[currentSlide].assets}
            goToSlide={goToSlide}
            currentSlide={currentSlide}
          />
        )}
      </div>

      {/* ✅ Play button ONLY to start autoplay */}
      {!isPlaying && currentSlide !== slides.length - 1 && (
        <button
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying((prev) => !prev);
        }}
        className="absolute right-8 bottom-8 z-50 p-2 rounded-full bg-white text-black"
      >
        ❚❚
      </button> 
      )}
    </div>
  );
}



