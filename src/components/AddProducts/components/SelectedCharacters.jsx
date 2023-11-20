/* eslint-disable react/no-unknown-property */
import { useState } from "react";

function SelectCharacters({ specs, updateSpecs }) {
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState("");
  let specCopy = [...(specs || [])];
  const handleAddOption = (e) => {
    e.preventDefault();
    if (currentOption) {
      setOptions([...options, currentOption]);
      setCurrentOption("");
      updateSpecs([...options, currentOption]); // Pasa el objeto de especificación
    }
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);

    updateSpecs(newOptions);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={currentOption} // Establece el ID de la especificación en lugar del objeto
          onChange={(e) => setCurrentOption(e.target.value)} // Maneja el ID seleccionado
        >
          <option value="">Seleccione una opción</option>
          {specCopy &&
            specCopy.map((spec) => (
              <option key={spec.id} value={spec.id.toString()}>
                {spec.description}
              </option>
            ))}
        </select>

        <button
          onClick={handleAddOption}
          className="btn bg-blue-500 text-white px-2 py-1 rounded"
        >
          Agregar
        </button>
      </div>

      <div className="flex flex-col flex-nowrap">
        {options.map((optionId, index) => (
          <div key={index} className="flex justify-start items-center gap-2 border-[1.5px] rounded-md px-2 py-1 max-w-fit border-secondary-content">
            <span class="material-symbols-outlined">{specCopy[parseInt(optionId) - 1].icon}</span>
            <span>{specCopy[parseInt(optionId) - 1].description}</span>
            <button
              onClick={() => handleRemoveOption(index)}
              className="ml-1 hover:text-red-500 flex items-center"
            >
              <span class="material-symbols-outlined">close_small</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCharacters;
