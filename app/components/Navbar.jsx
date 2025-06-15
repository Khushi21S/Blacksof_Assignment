"use client";
import Image from "next/image";

export default function Navbar() {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageClick = () => {
    alert("Language selection is under development.");
  };

  return (
    <header className="w-full bg-gray-50 py-2 sm:py-3 px-4 sm:px-6 lg:px-12 flex justify-between items-center shadow-sm fixed top-0 z-50">
      {/* Left: Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/supreme_logo.png"
          alt="Supreme Group Logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </div>

      {/* Right: Contact Us and Icons */}
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
        {/* Contact Us Button */}
        <button
          onClick={handleContactClick}
          className="bg-cyan-400 text-black text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full hover:bg-cyan-500 transition"
        >
          Contact Us
        </button>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/supreme-group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkedIn.png"
            alt="LinkedIn"
            className="h-4 sm:h-5 w-4 sm:w-5 object-contain"
          />
        </a>

        {/* Language Icon */}
        <button onClick={handleLanguageClick} className="cursor-pointer">
          <img
            src="/language-icon.png"
            alt="ENG"
            className="h-7 sm:h-8 w-7 sm:w-8 object-contain"
          />
        </button>
      </div>
    </header>
  );
}
