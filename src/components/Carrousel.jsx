export const Carrousel = ({ data }) => {
  // Verifica si hay datos en la variable 'data'
  if (!data || data.length === 0) {
    return null; // Si no hay datos, no se muestra el carrusel
  }

  // Crea un array con las imágenes del carrusel
  const carouselItems = data.productImages.map((imagenProducto, index) => (
    <div
      key={index}
      id={`slide${index + 1}`}
      className="carousel-item relative w-full"
    >
      <img
        src={`data:image/jpeg;base64, ${imagenProducto}`}
        alt="Retroexcavadora"
        className="w-full"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${index === 0 ? data.length - 1 : index - 1}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${(index + 1) % data.length}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  ));

  return <div className="carousel w-full">{carouselItems}</div>;
};
