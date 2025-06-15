export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
     <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
         <div className="absolute inset-0 bg-black/30 z-10"></div>

  {/* Text Content */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <p className="text-sm md:text-base drop-shadow">Performance in motion</p>
    <h1
      className="text-3xl md:text-5xl font-bold mt-2 drop-shadow"
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
    >
      Soft Trims and <span className="text-cyan-300">NVH Solutions</span>
    </h1>
    <p className="text-lg md:text-4xl mt-2 drop-shadow">
      for seamless rides
    </p>
  </div>
    </section>
  );
}
