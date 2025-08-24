import { SearchInputSuggestions } from "@features";
import { SearchIcon, LeftArrowIcon } from "@components";
import { useEffect, useRef } from "react";

export type SearchInputExpandedProps = {
  handleInputFocus: () => void;
  showSuggestions: boolean;
  setShowSuggestions: (value: boolean) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleFilterProducts: (term: string) => void;
  handleSelectSuggestion: (suggestion: string) => void;
  handleCloseExpanded: () => void;
}

export function SearchInputExpanded(props: SearchInputExpandedProps) {
  const {
    handleInputFocus,
    showSuggestions,
    setShowSuggestions,
    searchTerm,
    setSearchTerm,
    handleFilterProducts,
    handleSelectSuggestion,
    handleCloseExpanded
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="absolute left-0 top-0 w-full z-10 bg-white p-4 flex border-b border-gray-200" >
      <button
        className="text-gray-500 hover:text-gray-700 hover:cursor-pointer"
        aria-label="Back"
        onClick={handleCloseExpanded}
      >
        <LeftArrowIcon />
      </button>
      <div  className="relative w-full flex">
        <input 
          className="w-full px-4 pe-7 border border-gray-300 rounded relative py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Buscar producto..."
          onFocus={handleInputFocus}
          onBlur={() => setShowSuggestions(false)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleFilterProducts(searchTerm)}}
          ref={inputRef}
        />
        <button
          className="right-6 absolute top-1/2 -translate-y-1/2 h-full text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          aria-label="Search"
          onClick={() => handleFilterProducts(searchTerm)}
        >
          <SearchIcon />
        </button>
        {showSuggestions && <SearchInputSuggestions handleSelectSuggestion={handleSelectSuggestion} /> }
      </div>
    </div>
  );
}   