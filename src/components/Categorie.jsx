/* eslint react/prop-types: */

const Categorie = (props) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full w-72 h-40 bg-cover">
      <figure className="bg-cover bg-center">
      <img
        className="w-full"
        src={props.image}
        alt="Shoes"
      />
      </figure>
      <div className="card-body h-40 p-4">
        <h2 className="card-title  text-white">{props.title}</h2>
        <p className=" text-primary-content text-[14px]">{props.subtitle}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent btn-sm">Ver Todos</button>
        </div>
      </div>
    </div>
  );
};
export default Categorie;
