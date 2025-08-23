import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProductsFiltered } from "@features";

const SUGGESTONS = ["Silla", "Banco", "Escalera"];

export function SearchInput() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion); 
    handleFilterProducts(suggestion);
  }

  const handleFilterProducts = (term: string) => {
    dispatch(setProductsFiltered(term));
  }

  return (
    <div className="relative">
      <input 
        className="px-4 pe-7 border border-gray-300 rounded relative py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Buscar producto..."
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') handleFilterProducts(searchTerm)}}
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 h-full text-gray-500 hover:text-gray-700 hover:cursor-pointer"
        aria-label="Search"
        onClick={() => handleFilterProducts(searchTerm)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      {showSuggestions && 
        <div className="absolute py-3 z-10 bg-white border border-gray-300 w-full mt-1">
          <ul className="space-y-2">
            {SUGGESTONS.map((suggestion) => {
              return (
                <li className="w-full" key={suggestion}>
                  <button
                    className="px-4 text-left w-full hover:cursor-pointer hover:bg-gray-200 p-1"
                    onMouseDown={() => handleSelectSuggestion(suggestion)}
                  >
                    {suggestion}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      }
    </div>
  );
}   