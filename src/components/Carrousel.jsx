import React, { useState } from "react";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative">
      <button
        className="absolute inset-y-1/2 left-0 z-10 text-white px-3 py-1 rounded"
        onClick={prevSlide}
      >
        Anterior
      </button>
      <button
        className="absolute inset-y-1/2 right-0 z-10 text-white px-3 py-1 rounded"
        onClick={nextSlide}
      >
        Siguiente
      </button>
      <div className="flex justify-center items-center">
        {data.map((image, index) => (
          <div
            key={index}
            className={`w-full h-64 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <img
              src={`data:image/jpeg;base64, ${image.productImage}`}
              alt={`Imagen ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
