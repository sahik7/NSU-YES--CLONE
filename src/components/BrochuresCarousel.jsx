import React, { useState, useEffect } from 'react';

const brochureImages = [
  "https://nsuyes.org/wp-content/uploads/2022/06/Entrepret-Season-2-NSU-YES-scaled.webp",
  "https://nsuyes.org/wp-content/uploads/2022/06/NMCL-Brochure-by-NSU-YES-scaled.webp",
  "https://nsuyes.org/wp-content/uploads/2022/06/Entrepret-Brochure-by-NSU-YES-scaled.webp",
  "https://nsuyes.org/wp-content/uploads/2022/06/Ad-Maker-Brochure-by-NSU-YES-scaled.webp"
];

function BrochuresCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === brochureImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      {/* Carousel Container */}
      <div className="relative w-full max-w-md mx-auto mt-6 overflow-hidden rounded-lg border border-gray-200 h-[300px]">
        {brochureImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Brochure ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BrochuresCarousel;
