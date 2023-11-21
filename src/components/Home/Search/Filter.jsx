export const Filter = ({ productTypes, onFilterChange }) => {
  const handleFilterChange = (productType) => {
    if (productType === "Todos") {
      onFilterChange(""); // Si se selecciona 'Todos', se pasa una cadena vacía para mostrar todos los productos
    } else {
      onFilterChange(productType); // Llamar a la función onFilterChange con el tipo de producto seleccionado
    }
  };

  return (
    <>
      <select
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option key="todos" value="Todos">
          Todos
        </option>
        {productTypes.map((productType) => (
          <option key={productType.id} value={productType.description}>
            {productType.description}
          </option>
        ))}
      </select>
    </>
  );
};
