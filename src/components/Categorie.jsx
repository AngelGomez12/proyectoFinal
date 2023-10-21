const Categorie = (props) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full w-72 h-[200px]">
              <img className="object-cover rounded-2xl "
                src={props.image}
                alt="Shoes"
              />
            <div className="card-body h-[200px]" >
              <h2 className="card-title">{props.title}</h2>
              <p>{props.subtitle}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-md">Ver Todos</button>
              </div>
            </div>
          </div>
  )
}
export default Categorie