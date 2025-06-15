export default function Slide({ slide }) {
  return (
    <div className="h-full w-full flex items-center justify-center px-4 lg:px-16">
      {slide.id === 1 ? (
        // ✅ First slide ONLY text
        <div className="text-center max-w-4xl">
          <h2 className="text-xl lg:text-2xl">{slide.title}</h2>
        </div>
      ) : (
        // ✅ Other slides = two-column layout with video + text
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
          <div className="flex justify-center">
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
