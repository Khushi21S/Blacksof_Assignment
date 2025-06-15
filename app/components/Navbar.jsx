import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-50 py-3 px-12 flex justify-between items-center shadow-sm">
  {/* Left: Logo */}
  <div className="flex items-center">
    <img
      src="/supreme_logo.png" // ← Replace with actual logo
      alt="Supreme Group Logo"
      className="h-10 w-auto object-contain"
    />
  </div>

  {/* Right: Contact Us and Icons */}
  <div className="flex items-center space-x-6">
    {/* Contact Us Button */}
    <button className="bg-cyan-400 text-black font-medium px-5 py-1.5 rounded-full hover:bg-cyan-500 transition duration-300">
      Contact Us
    </button>

    {/* LinkedIn Icon */}
    <img
      src="/linkedIn.png" // ← Replace with actual LinkedIn icon path
      alt="LinkedIn"
      className="h-5 w-5 object-contain"
    />

    {/* Language Icon */}
    <img
      src="/language-icon.png" // ← Replace with actual language/ENG icon path
      alt="ENG"
      className="h-10 w-10 object-contain"
    />
  </div>
</header>


  );
}
