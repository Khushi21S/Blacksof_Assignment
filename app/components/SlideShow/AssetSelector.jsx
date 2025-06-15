import Image from "next/image";

export default function AssetSelector({ assets, goToSlide }) {
  if (!assets || assets.length === 0) return null;

  return (
    <div className="flex gap-4 overflow-x-auto px-4">
      {assets.map((asset, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation(); // ✅ prevent advancing to next slide on parent click
            goToSlide(index + 2); // ✅ Assuming slide 2 is the start of assets, adjust if needed
          }}
          className="flex flex-col items-center focus:outline-none"
        >
          <Image
            src={asset.image ? asset.image : ""}
            alt={asset.name}
            width={80}
            height={80}
            className="rounded-xl hover:scale-105 transition"
          />
          <span className="mt-2 text-sm text-white text-center">{asset.name}</span>
        </button>
      ))}
    </div>
  );
}
