import { useState, useEffect } from "react";
import useApi from "../../hooks/hookApi";
function SelectCharacters() {
  const [options, setOptions] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState([]);



  const {data:specData} = useApi(
    `${import.meta.env.VITE_BACKEND_URL}specs`,
    {}
  )

  useEffect(() => {
     if (specData) {
    const description = specData.map(({description})=>description)
    setOptions(description);
     }
  }, [specData]);

  const handleAddOption = (e) => {
    e.preventDefault();
    if (currentOption) {
      // setOptions([...options, currentOption]);
      const option = currentOptions.some(option=> option==currentOption)
      if(!option){
      setCurrentOptions([...currentOptions, currentOption])
      setCurrentOption("");
      }
      
    }
  };

  const handleRemoveOption = (option) => {
     const newCurrentOptions = currentOptions.filter(cOption=> cOption != option )
     setCurrentOptions(newCurrentOptions)
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={currentOption}
          onChange={(e) => setCurrentOption(e.target.value)}
        >
          <option disabled value="">
                    Seleccione las Caracteristicas
                    </option>
                    {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
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

      <div className="flex">
        {currentOptions.map((option) => (
          <div key={option} className="flex items-center mb-2">
            <span>{option}</span>
            <button
              onClick={() => handleRemoveOption(option)}
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
