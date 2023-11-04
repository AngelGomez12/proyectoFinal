import { useState } from "react";

function SelectCharacters() {
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState("");

  const handleAddOption = (e) => {
    e.preventDefault();
    if (currentOption) {
      setOptions([...options, currentOption]);
      setCurrentOption("");
    }
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={currentOption}
          onChange={(e) => setCurrentOption(e.target.value)}
        >
          <option value="">Seleccione una opción</option>
          <option value="Opción 1">Opción 1</option>
          <option value="Opción 2">Opción 2</option>
          <option value="Opción 3">Opción 3</option>
        </select>
        <button
          onClick={handleAddOption}
          className="btn bg-blue-500 text-white px-2 py-1 rounded"
        >
          Agregar
        </button>
      </div>

      <div className="flex">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <span>{option}</span>
            <button
              onClick={() => handleRemoveOption(index)}
              className="ml-2 text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCharacters;
