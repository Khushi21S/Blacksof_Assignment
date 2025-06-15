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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setCurrentSlide(0);
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[80vh] sm:min-h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* ✅ Responsive & Clamped Heading */}
      <motion.div
  initial={{ y: 0, top: "50%", translateY: "-50%" }}
  animate={
    currentSlide === 0
      ? { top: "50%", translateY: "-50%" }
      : { top: "2rem", translateY: "0%" }
  }
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="absolute inset-x-0 text-center z-40 px-4"
>
  <h1
    className="font-thin leading-tight mx-auto
               text-lg sm:text-2xl md:text-3xl lg:text-4xl
               max-w-[95%] sm:max-w-[80%]"
  >
    Evolving the drive
    <br className="block sm:hidden" />
    with <span className="font-bold">360-degree</span><span> nonwoven solutions</span>
  </h1>
</motion.div>

      {/* ✅ Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 text-sm sm:text-base md:text-lg lg:text-xl"
        >
          <Slide slide={slides[currentSlide]} />
        </motion.div>
      </AnimatePresence>

      {/* ✅ Click to manually advance */}
      <div
        className="absolute inset-0 cursor-pointer z-20"
        onClick={() => {
          setIsPlaying(false);
          nextSlide();
        }}
      />

      {/* ✅ Progress bar on left */}
      <div className="absolute left-2 sm:left-5 top-0 bottom-0 flex items-center z-30">
        <ProgressBar total={slides.length} current={currentSlide + 1} />
      </div>

      {/* ✅ Asset Thumbnails */}
      <div className="absolute bottom-2 sm:bottom-6 w-full flex justify-center flex-wrap gap-2 sm:gap-3 z-30 px-2 text-xs sm:text-sm md:text-base">
        {slides[currentSlide].assets.length > 0 && (
          <AssetSelector
            assets={slides[currentSlide].assets}
            goToSlide={goToSlide}
            currentSlide={currentSlide}
          />
        )}
      </div>

      {/* ✅ Play Button */}
      {!isPlaying && currentSlide !== slides.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(true);
          }}
          className="absolute right-3 sm:right-6 bottom-2 sm:bottom-6 z-50 p-2 rounded-full bg-white text-black hover:bg-gray-300 transition text-xs sm:text-sm"
        >
        ❚❚
        </button>
      )}
    </div>
  );
}
