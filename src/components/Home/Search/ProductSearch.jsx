import { useRef, useState, useEffect } from "react";
import { ContextProducts } from "../../../contexts/ProductsList";
import { useContext } from "react";

function ProductSearch({ onFilterChange }) {
  const { products } = useContext(ContextProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
  });

  const searchRef = useRef(null);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setShowSuggestions(true);

    // Filtrar productos que coincidan con el término de búsqueda
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
    onFilterChange(term);
  };

  const handleSuggestionClick = (productName) => {
    setSearchTerm(productName);

    onFilterChange(productName);
    setShowSuggestions(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  // const applyFilters = () => {
  //   let results = [...products];

  //   if (filters.category) {
  //     results = results.filter(
  //       (product) => product.category === filters.category
  //     );
  //   }

  //   setSearchResults(results);
  // };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative">
      <div className="btn join-item rounded-r-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
            fill="#FFE100"
          />
        </svg>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
          className="btn join-item rounded-r-full placeholder:text-center"
        />
      </div>
      {showSuggestions && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-y-auto rounded-md shadow-lg">
          {searchResults.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSuggestionClick(product.name)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductSearch;
