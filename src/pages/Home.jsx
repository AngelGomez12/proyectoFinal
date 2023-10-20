export const Home = () => {
  return (
    <div
      className="hero min-h-fit"
      style={{
        backgroundImage:
          "url(../../public/img/bg-image-hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-extrabold">Renta de Maquinaria Pesada</h1>
          <h3 className="mb-5 text-2xl font-bold">La solución perfecta para tu proyecto</h3>
          <p className="mb-5">
          Obtén el equipo que necesitas, cuando lo necesitas y sin necesidad de comprarlo
          </p>
          <button className="btn btn-primary">Ver Máquinas Disponibles</button>
          <button className="btn btn-link">Explora por categorías</button>
        </div>
      </div>
    </div>
  );
};
