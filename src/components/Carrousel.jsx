import { useState } from "react";

const Carrousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Anterior</button>
      <div className="carousel-content">
        {data.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            <img
              className="w-1/2 sm:w-2/5 md:w-1/2 lg:w-1/2 max-h-80 min-h-min"
              key={index}
              src={`data:image/jpeg;base64, ${item.productImage}`}
              alt="Retroexcavadora"
            />
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Siguiente</button>
    </div>
  );
};

export default Carrousel;
