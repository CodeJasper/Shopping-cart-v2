import { SearchInputSuggestions } from "@features/products-list/components/SearchInputSuggestions";
import { SearchIcon} from "@components/icons/SearchIcon";

export type SearchInputStaticProps = {
  handleInputFocus: () => void;
  showSuggestions: boolean;
  setShowSuggestions: (value: boolean) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleFilterProducts: (term: string) => void;
  handleSelectSuggestion: (suggestion: string) => void;
}

export function SearchInputStatic(props: SearchInputStaticProps) {
  const { 
    handleFilterProducts,
    handleInputFocus,
    handleSelectSuggestion,
    searchTerm,
    setSearchTerm,
    setShowSuggestions,
    showSuggestions
  } = props;
  return (
    <div className="relative max-w-[150px] md:max-w-full" >
      <input 
        className="w-full px-4 pe-7 border border-gray-300 rounded relative py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Buscar producto..."
        onFocus={handleInputFocus}
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
        <SearchIcon />
      </button>
      {showSuggestions && <SearchInputSuggestions handleSelectSuggestion={handleSelectSuggestion} /> }
    </div>
  );
}   